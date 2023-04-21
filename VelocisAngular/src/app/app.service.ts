import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js'; 
import { SupabaseDetails } from './shared/initSupabase';
 

export interface IUser {
  user_name:string;
password:string;
full_name:string;
}



@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(SupabaseDetails.supabaseURL, SupabaseDetails.supabaseKey);
  }

  // public getUser(): User|null {
  //   return this.supabaseClient.auth.user();
  // }

  // public getSession(): Session|null {
  //   return this.supabaseClient.auth.session();
  // }

  // public getProfile(): PromiseLike<any> {
  //   const user = this.getUser();

  //   return this.supabaseClient.from('profiles')
  //   .select('username, website, avatar_url')
  //   .eq('id', user?.id)
  //   .single();
  // }

  // public authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void): any {
  //   return this.supabaseClient.auth.onAuthStateChange(callback);
  // }

  // public signIn(email: string): Promise<any> {
  //   return this.supabaseClient.auth.signIn({
  //     email,
  //   });
  // }

  // public signOut(): Promise<any> {
  //   return this.supabaseClient.auth.signOut();
  // }

  signIn(email: string, password: string) {
    return this.supabaseClient.auth.signInWithPassword({ email, password })
  }

  addUser(user_name: string, password: string,full_name:string) { 
    return this.supabaseClient.from('Users').insert({ full_name, password, user_name  }).single()
  }
  // public updateProfile(userUpdate: IUser): any {
  //   //const user = this.getUser();a

  //   const update = {
  //     username: userUpdate.name,
  //     website: userUpdate.website,
  //     id: user?.id,
  //     updated_at: new Date(),
  //   };

  //   return this.supabaseClient.from('profiles').upsert(update, {
  //     returning: 'minimal', // Do not return the value after inserting
  //   });
  // }
}   