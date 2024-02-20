export const getProducts = `query GetProducts($search: String, $filter: String) {
  getProducts(search: $search, filter: $filter) {
    _id
    name
    price
    description
    category
    stock
    image
  }
}`;

export const getProductById = `query GetProductById($getProductByIdId: String!) {
    getProductById(id: $getProductByIdId) {
      _id
      name
      price
      description
      category
      stock
      image
    }
  }`;

export const getLocation = `query GetLocation {
    getLocation {
      _id
      lat
      lng
    }
  }`;
export const getProductsOrder = `query GetProductOrder {
  getProductOrder {
    _id
    userId
    productId
    province
    product {
      name
    }
    address
    status
    createdAt
  }
}`;

export const getPickupOrder = `query GetPickupOrder {
    getPickupOrder {
      _id
      userId
      lat
      lng
      status
      createdAt
    }
  }`;

export const getUserByLoginInfo = `query GetUserByLoginInfo {
    getUserByLoginInfo {
      _id
      email
      password
      fullName
      role
      totalPoint
    }
  }`;

export const getPickupOrderById = `query GetPickupOrderById($getPickupOrderByIdId: String!) {
    getPickupOrderById(id: $getPickupOrderByIdId) {
      _id
      userId
      lat
      lng
      status
      createdAt
    }
  }`;

export const createProductOrder = `mutation CreateProductOrder($productId: String!, $province: String!, $address: String!) {
    createProductOrder(productId: $productId, province: $province, address: $address) {
      _id
      userId
      productId
      province
      address
      status
      createdAt
    }
  }`;

export const changeProductOrderStatus = `mutation ChangeStatusProductOrder($productOrderId: String!) {
    changeStatusProductOrder(productOrderId: $productOrderId) {
      _id
      userId
      productId
      province
      address
      status
      createdAt
    }
  }`;

export const changePickupOrderStatus = `mutation ChangeStatusPickupOrder($pickupOrderId: String!) {
  changeStatusPickupOrder(pickupOrderId: $pickupOrderId) {
    _id
    userId
    lat
    lng
    status
    createdAt
  }
}`;

export const addPoinUser = `mutation AddPoin($poin: Int, $userId: String) {
  addPoin(poin: $poin, userId: $userId) {
    _id
    email
    password
    fullName
    role
    totalPoint
  }
}`;
