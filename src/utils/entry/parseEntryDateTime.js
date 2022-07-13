module.exports = (date) => {
    // parse the date from given string
    // format: "17.06.2022 23:58 ~ 18.06.2022 00:03"

    // eger sadece birisi varsa oteki gozukmuyor updated de
    const createdAt = date;
    const updatedAt = createdAt.includes("~") ? createdAt.split(" ~ ")[1].trim() : null;
    const [createdAtDate, createdAtTime] = createdAt.split(" ");
    const [updatedAtDate, updatedAtTime] = updatedAt ? updatedAt.split(" ") : [null, null];
    return [
        createdAtDate, 
        createdAtTime, 
        updatedAtDate ? updatedAtDate : null, 
        updatedAtTime ? updatedAtTime : null
    ];
}