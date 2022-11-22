const bcrypt = require("bcrypt");
const config = require("../../../config")
const { generateAccessToken, randomNumber } = require("../../../util/manageToken");

module.exports = {
  Mutation: {
    login: async (_, { data }, { models }) => {
      try {
        // TODO: Check invalid data
        if (!data.password || !data.username) throw config.statusMessage.BAD_REQUEST;

        // TODO: Check User with username
        const _user = await models.userModel.findOne({ username: data.username }).exec();
        if (!_user) throw config.statusMessage.INVALID_USERNAME_OR_PASSWORD;

        // TODO: Verify user password
        const comparePassword = await bcrypt.compare(data.password, _user.password);
        if (!comparePassword) throw config.statusMessage.INVALID_USERNAME_OR_PASSWORD;

        // TODO: Generate accessToken
        const accessToken = generateAccessToken({ id: _user._id.toString(), role: _user.role });

        // TODO: Response
        const resData = { accessToken: accessToken, data: _user };

        return resData;
      } catch (err) {
        console.log("err: ", err);
        throw new Error(err);
      }
    },

    register: async (_, { data }, { models }) => {
      try {
        // TODO: Check invalid data
        if (!data.password || !data.username) throw config.statusMessage.BAD_REQUEST;

        // TODO: Check User with username
        const _user = await models.userModel.findOne({ username: data.username }).exec();
        if (_user) throw config.statusMessage.USER_ALREADY_EXIST;

        // TODO: Random user code
        const code = randomNumber(7);

        // TODO: hash UserAuth password
        const hashPassword = await bcrypt.hash(data.password, 10);

        // TODO: Create User data
        const createUser = await models.userModel.create({ ...data, role: "CUSTOMER", customerCode: code, password: hashPassword });

        // TODO: Generate accessToken
        const accessToken = generateAccessToken({ id: createUser._id.toString(), role: createUser.role });

        // TODO: Response
        const resData = { accessToken: accessToken, data: createUser };

        return resData;
      } catch (err) {
        console.log("err: ", err);
        throw new Error(err);
      }
    },
  }
};