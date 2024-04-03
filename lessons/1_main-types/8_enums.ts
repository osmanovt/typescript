enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 'f'
}

const res2 = {
    message: 'Платеж успешен',
    statusCode: 1
};

if (res2.statusCode === StatusCode.SUCCESS) {
    console.log(res2.statusCode);
}

function actionStatus(status: StatusCode) {

}

actionStatus(StatusCode.SUCCESS);
actionStatus(1);
// actionStatus(3);
// actionStatus('p')

function compute() {
    return 3;
}

enum Roles {
    ADMIN = 1,
    USER = ADMIN * 2,
    GUEST = compute()
}

const enum Roles2 {
    ADMIN = 1,
    USER = 2
}

const res3 = Roles2.ADMIN;