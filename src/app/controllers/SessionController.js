    import User from '../models/User'

    class SessionControler{
      async store(req, res){
        const {email, password_hash} = req.body
        const user = await User.findOne({ where: {email}});

        if(!user){
          return res.status(401).json({error : "Usuario não existe"});

        }

        if(!(user.password_hash == password_hash)){
            return res.status(401).json({error : "Password Incorreto"});
        }
            
        const {id, name} = user;

        return res.json({
          user: {
            id,
            name,
            email
          },
        })
      }
    }

    export default new SessionControler ();