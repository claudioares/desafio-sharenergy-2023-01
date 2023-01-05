const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const UserListingSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    password: String,
})

const UserListing = mongoose.model('userBD', UserListingSchema)

export default UserListing;