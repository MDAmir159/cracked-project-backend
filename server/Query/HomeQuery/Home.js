const PromiseModule = require("../../Promise/PromiseModule");

const AllHomeQueries = {
    postNewElements
}

async function postNewElements(userId,postDescription,postInsertedTime,postUpdatedTime,postUserName) {
    // console.log(inputs , "line 8");
    // const {
    //     userId,
    //     postDescription,
    //     postInsertedTime,
    //     postUpdatedTime,
    //     postUserName
    // } = inputs;
    // console.log(userId,postDescription,postInsertedTime,postUpdatedTime,postUserName);
    const sqlInstert = "INSERT INTO posts (userId, postDescription, postInsertedTime, postUpdatedTime, postUserName) VALUES (?, ?, ?, ?, ?)";
    const inputArray = [userId,postDescription,postInsertedTime,postUpdatedTime,postUserName];
    return PromiseModule.affectingDataBase(sqlInstert,inputArray);
}

module.exports = AllHomeQueries;