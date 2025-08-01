'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = await auth()

  if (!userId) {
    return { message: 'No Logged In User' }
  }
  
  const client = clerkClient()

  try {
    console.log("formdata",formData.get('tier'),userId)
    const res = await (await client).users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        tier: formData.get('tier'),
      },
    })
    return { message: res.publicMetadata }
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' }
  }
}