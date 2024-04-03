const getUserInfo = (userEntity: { firstname: string, surname: string }): string => {
    return `${userEntity.firstname} ${userEntity.surname}`;
};

const user = {
    firstname: 'Name',
    surname: 'Surname',
    city: 'Moscow',
    age: 30,
    skills: {
        dev: true,
        front: true
    }
};

console.log(getUserInfo(user));
