import User from '../models/User';

const createService = (body: any) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id: string) => User.findById(id);

const updateService = (id: string, username: string, password: string, level: string, email: string, phone: string, avatar: string) =>
  User.findOneAndUpdate({ _id: id }, { username, password, level, email, phone, avatar });

const deleteService = (id: string) => User.findOneAndDelete({ _id: id });

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService,
};
