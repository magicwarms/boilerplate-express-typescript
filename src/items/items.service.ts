/**
 * Data Model Interfaces
 */
import { BaseItem } from "./item.interface";
// import { Items } from "./items.interface";
import { v4 } from "uuid";
/**
 * In-Memory Store
 */
let items: BaseItem[] = [
    {
        id: "65125c63-e36e-4366-85bc-de99c168c4a9",
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    },
    {
        id: "7649a7c4-0881-401b-ba39-0c0ac34882eb",
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    },
    {
        id: "9f0401f4-005f-41e8-bdbc-34b8d4208745",
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    },
];
/**
 * Service Methods
 */

export const findAllMenu = async (): Promise<BaseItem[]> => Object.values(items);
export const findMenu = (id: string): BaseItem | null => {
    const findItem = items.find((item) => {
        return item.id === id;
    });
    if (!findItem) return null;
    return findItem;
};
export const createMenu = (newItem: BaseItem): BaseItem => {
    const id: string = v4();
    newItem.id = id;
    items.push(newItem);

    return newItem;
};
// export const update = async (id: string, itemUpdate: BaseItem): Promise<BaseItem | null> => {
//     const item = await find(id);

//     if (!item) return null;

//     items[id] = { id, ...itemUpdate };

//     return items[id];
// };
// export const remove = async (id: string): Promise<null | void> => {
//     const item = await find(id);

//     if (!item) return null;

//     delete items[id];
//     return;
// };
