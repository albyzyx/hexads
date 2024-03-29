import mongoose, { ConnectOptions } from "mongoose";

const connect = async () => {
  try {
    let connStr: string;
    if (process.env.NODE_ENV === "development") {
      connStr = process.env.MONGODB_URL_DEV ?? "mongodb://localhost:27017/hexads";
    } else {
      connStr = process.env.MONGODB_URL_PROD ?? "mongodb://localhost:27017/hexads";
    }

    const conn = await mongoose.connect(connStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connect;
