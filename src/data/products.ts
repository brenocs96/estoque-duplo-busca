
// Arquivo com dados de exemplo para simular o CSV de estoque
// Estes dados seriam substituídos pelos dados do CSV real
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cabo USB-C",
    description: "Cabo USB-C (branco) para carregamento rápido",
    category: "Acessórios",
    price: 49.90,
    stock: 35,
  },
  {
    id: "2",
    name: "Cabo Lightning",
    description: "Cabo Lightning (branco) para iPhone",
    category: "Acessórios",
    price: 79.90,
    stock: 20,
  },
  {
    id: "3",
    name: "Cabo HDMI",
    description: "Cabo HDMI (preto) 2m",
    category: "Acessórios",
    price: 39.90,
    stock: 15,
  },
  {
    id: "4",
    name: "Carregador sem fio",
    description: "Carregador sem fio (branco) 15W",
    category: "Carregadores",
    price: 149.90,
    stock: 10,
  },
  {
    id: "5",
    name: "Carregador USB-C",
    description: "Carregador USB-C (preto) 30W",
    category: "Carregadores",
    price: 129.90,
    stock: 25,
  },
  {
    id: "6",
    name: "Fone de ouvido Bluetooth",
    description: "Fone de ouvido Bluetooth (branco)",
    category: "Áudio",
    price: 199.90,
    stock: 8,
  },
  {
    id: "7",
    name: "Fone de ouvido com fio",
    description: "Fone de ouvido com fio (preto)",
    category: "Áudio",
    price: 99.90,
    stock: 30,
  },
  {
    id: "8",
    name: "iPhone 16",
    description: "Smartphone iPhone 16 (azul) 128GB",
    category: "Smartphones",
    price: 7799.00,
    stock: 5,
    image: "/lovable-uploads/efa95f8b-7b9a-4170-b783-28d5ac9c86b9.png"
  },
  {
    id: "9",
    name: "iPhone 16 Pro",
    description: "Smartphone iPhone 16 Pro (preto) 256GB",
    category: "Smartphones",
    price: 9799.00,
    stock: 3,
  },
  {
    id: "10",
    name: "Capa iPhone 16",
    description: "Capa de proteção para iPhone 16 (transparente)",
    category: "Acessórios",
    price: 149.90,
    stock: 40,
  },
];
