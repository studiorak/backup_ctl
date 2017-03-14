db = connect("localhost:27017/admin");
db.getSiblingDB("admin").auth("my_user", "my_password");
rs.slaveOk();
