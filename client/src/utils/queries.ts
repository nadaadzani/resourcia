export const getProducts =`query GetProducts($offset: Int, $search: String) {
    getProducts(offset: $offset, search: $search) {
      _id
      name
      price
      description
      category
      stock
    }
  }`

export const getProductById = `query GetProductById($getProductByIdId: String!) {
    getProductById(id: $getProductByIdId) {
      _id
      name
      price
      description
      category
      stock
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
      lat
      lng
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
