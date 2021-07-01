import AsyncStorage from "@react-native-async-storage/async-storage";
export const userDataKey = "MARData";
export const notificationsKey = "MARNotifcations";

export const saveToStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem("MARData");
  } catch (e) {
    console.log(e);
  }
};

export const clearNotifications = async () => {
  try {
    await AsyncStorage.removeItem("MARNotifications");
  } catch (e) {
    console.log(e);
  }
};

export const getStorageData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteNotification = async (id) => {
  const data = await getStorageData("MARNotifications");
  data.notifications = data.notifications.filter((el) => el.id !== id);

  saveToStorage("MARNotifications", {
    notifications: data.notifications,
  });

  /*chrome.browserAction.setBadgeText({
    text: data.notifications.length ? data.notifications.length.toString() : "",
  });*/

  return data;
};
