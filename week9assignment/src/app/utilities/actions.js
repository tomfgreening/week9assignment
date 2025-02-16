// 'use server'
// import { currentUser } from '@clerk/nextjs/server'

// export async function addHobby(formData: FormData) {
//   const user = await currentUser()

//   if (!user) {
//     throw new Error('You must be signed in to use this feature')
//   }

//   const serverData = {
//     usersHobby: formData.get('hobby'),
//     userId: user.id,
//     profileImage: user.imageUrl,
//   }

//   console.log('add Hobby completed with user details ', serverData)
// }
