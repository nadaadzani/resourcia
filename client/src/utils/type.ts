export type ProductsModel = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  image: string;
};

export type AIChatProps = {
  open: boolean;
  onClose: () => void;
};
