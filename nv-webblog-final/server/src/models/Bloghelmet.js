module.exports = ( sequelize, DataTypes ) => {
    const Bloghelmet = sequelize.define('Bloghelmet', {
        typehelmet: DataTypes.STRING,  //ประเภทหมวกกันน็อค
        thumbnail: DataTypes.STRING, 
        pictures: DataTypes.STRING, //รูปหมวกกันน็อค
        detail: DataTypes.TEXT,        //รายละเอียดหมวกกันน็อค
        weight: DataTypes.STRING,  //นำหนักหมวกกันน็อค
        size: DataTypes.STRING,    //ขนาดหมวกกันน็อค
        price: DataTypes.STRING,    //ราคาหมวกกันน็อค
        Protectionlevel: DataTypes.STRING, //ระดับการป้องกัน
        material: DataTypes.STRING,   //วัสดุที่ใช้ทำ
    })
    return Bloghelmet
}