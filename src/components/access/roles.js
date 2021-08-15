const actions = {
    //Products actions
    CREATE_PRODUCTS: "CREATE_PRODUCTS",
    EDIT_PRODUCTS: "EDIT_PRODUCTS",
    VIEW_PRODUCTS: "VIEW_PRODUCTS",
    DELETE_PRODUCTS: "DELETE_PRODUCTS",

    //Recipes actions
    CREATE_RECIPES: "CREATE_RECIPES",
    EDIT_RECIPES: "EDIT_RECIPES",
    VIEW_RECIPES: "VIEW_RECIPES",
    DELETE_RECIPES: "DELETE_RECIPES",

    //Orders actions
    CREATE_ORDERS: "CREATE_ORDERS",
    EDIT_ORDERS: "EDIT_ORDERS",
    VIEW_ORDERS: "VIEW_ORDERS",
    DELETE_ORDERS: "DELETE_ORDERS",

    //Discount actions
    CREATE_DISCOUNT: "CREATE_DISCOUNT",
    EDIT_DISCOUNT: "EDIT_DISCOUNT",
    VIEW_DISCOUNT: "VIEW_DISCOUNT",
    DELETE_DISCOUNT: "DELETE_DISCOUNT",

    //Admin actions
    CREATE_ADMIN: "CREATE_ADMIN",
    EDIT_ADMIN: "EDIT_ADMIN",
    VIEW_ADMIN: "VIEW_ADMIN",
    DELETE_ADMIN: "DELETE_ADMIN",

    //User actions
    CREATE_USER: "CREATE_USER",
    EDIT_USER: "EDIT_USER",
    VIEW_USER: "VIEW_USER",
    DELETE_USER: "DELETE_USER",
}

const roles = {
    ROOT_ADMIN: "ROOT_ADMIN",
    OPERATIONS: "OPERATIONS",
    CONTENT: "CONTENT",
    USER: "USER",
};

module.exports =  { actions, roles }

/*
create user
- name
- position

preset role
- operations
    - track order
    - track sales
    - mostly order related things
    - if possible(see shopping cart? + follow up)

- content
    - product updates
    - inventory updates
    - price update
    - images
*/