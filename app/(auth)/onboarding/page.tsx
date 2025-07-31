'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'
import { useEffect } from 'react'

export default function OnboardingComponent() {
  const [error, setError] = React.useState('')
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if ( user?.publicMetadata?.onboardingComplete) {
      router.replace('/events')
    }
  }, [])
  
  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData)
    if (res?.message) {
      // Reloads the user's data from the Clerk API
      await user?.reload()
      router.push('/events')
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  return (
    <div>
      <h1>Welcome</h1>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="tier">User Tier</label>
          <p>Select the tier for your account.</p>
          <select name="tier" id="tier" required>
            <option value="free">Free</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        {error && <p className="text-red-600">Error: {error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}