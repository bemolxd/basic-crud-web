export interface FriendRequest {
  id: number;
  recipientId: number;
  senderId: number;
  isActive: boolean;
  created_at: string;
}
