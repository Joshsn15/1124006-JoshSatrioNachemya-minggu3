export type UserInfo = {
  email: string;
  id: string;
  name: string;
  role: string;
}

export type user = {
    name: string;
}
export type Post = {
    id: string;
    title: string;
    content: string;
    status: string;
    user: user;
    userId: string;
    createdAt: string;
    updatedAt: string;
}


export type AsyncDataState = 'pending' | 'loading' | 'fulfilled' | 'error';