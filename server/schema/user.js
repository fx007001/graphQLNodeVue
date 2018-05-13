var { buildSchema } = require('graphql');

//定义schema
var schema = buildSchema(`
    type User{
        name: String!
        sex: String
        intro: String
        skills: [String]!
    }
    input UserInput {
        name: String!
        sex: String
        intro: String
        skills: [String]!
    }
    type Interest{
        dataes:[String]
    }
    type RecomDat{
      id:ID!
      title: String
      imgUrl: String
      des: String
      teach: String
      level: String
      learingNum: String
    }
    type PHPStart{
        total:String
        className:String
        advImg:[String]
        itemData:[RecomDat]
    }
    type teachData{
        id:String
        name:String
        imgIco:String
        imgUrl:String
        des:String
        tag:String
        workLeng:String
    }
    type Register{
      name:String
      password:String
      message:String
    }
    type Signin{
      name:String
      password:String
      message:String
    }
    type Query {
        user(id:Int!):User  
        users:[User]       
        signin(name:String!,password:String!):Signin 
        interestes(userId:Int!):Interest     
        recommend:[RecomDat]                 
        PHPStartData(lab:String):[PHPStart]  
        recomTearch(showPage:String,pageNum:String,startPage:String,endPage:String):[teachData]
    }
    
    type Mutation{
        register(name:String!,password:String!):Register
    }
    
`);

module.exports = schema