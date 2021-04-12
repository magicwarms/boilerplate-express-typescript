/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
import { v4 } from "uuid";
/**
 * In-Memory Store
 */
let items: Items = {
  1: {
    id: "65125c63-e36e-4366-85bc-de99c168c4a9",
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  2: {
    id: "7649a7c4-0881-401b-ba39-0c0ac34882eb",
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  3: {
    id: "9f0401f4-005f-41e8-bdbc-34b8d4208745",
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
};
/**
 * Service Methods
 */

export const findAllMenu = async (): Promise<Item[]> => Object.values(items);
export const find = async (id: string): Promise<Item> => items[id];
export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = v4();
  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};
export const update = async (
  id: string,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};
export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) return null;

  delete items[id];
  return;
};
