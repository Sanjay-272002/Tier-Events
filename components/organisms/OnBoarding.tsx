'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'
import { TIER_ORDER } from '@/types/tier'
import { completeOnboarding } from '@/app/(auth)/onboarding/_actions'

export default function OnboardingComponent({isupdate = false}: { isupdate?: boolean  }) {
  const [error, setError] = React.useState('')
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user?.publicMetadata?.onboardingComplete && !isupdate) {
      router.replace('/events')
    }
  }, [user, router])

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData)
    if (res?.message) {
      await user?.reload()
      router.push('/events')
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  const tierOptions = !isupdate?  [...TIER_ORDER]: TIER_ORDER.filter(tier => tier !== user?.publicMetadata?.tier);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-3  text-purple-700">Welcome to EventTier</h1>
        <form action={handleSubmit} className="w-full flex flex-col gap-6">
          <div>
           {!isupdate? <label htmlFor="tier" className="block text-xl text-center font-bold text-black text-800 mb-4">
              User Tier
            </label>:
            <label htmlFor="tier" className="block text-xl text-center font-bold text-black text-800 mb-4">
              Update Your Tier
            </label>
            }
            { !isupdate? <p className="text-xs text-black text-500 mb-2">Select the tier for your account.</p>:
            <p className="text-xs text-black text-500 mb-2">Select the tier to update your account.</p>
            }
            <select
              name="tier"
              id="tier"
              required
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
             {tierOptions.map((tier) =>  (
                <option key={tier} value={tier}> 
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>   
              ))}
            </select>
          </div>
          {error && (
            <p className="text-red-600 text-sm text-center">Error: {error}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}