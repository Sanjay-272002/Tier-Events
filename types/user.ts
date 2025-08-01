type User = {
  tierName: string;
  imageUrl?: string;
  username?: string;
};

interface HeaderProps {
  user?: User;
}