const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};


user["hobby"] = "skydiving";
user["premium"] = false;
user["mood"] = "happy";

const entries = Object.entries(user);
for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}