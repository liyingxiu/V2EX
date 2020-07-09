import Mock from 'mockjs';
const Random = Mock.Random;

export default Mock.mock('http://test.cn', (req, res) => {
    let list = [];
    for (let i = 0; i < 10; i++) {
        let item = {
            username: "@name",
            email: Mock.mock('@EMAIL()'),
            // password:
        }
    }
});
