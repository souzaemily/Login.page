const BD = require('../database/BD');

module.exports = {
    async loginUser(req, res){
        try{
            const{email, senha} = req.body;

            const verificacao = await BD.user.find(e => e.email == email);
            if(!verificacao){
                res.status(401).json({mensagem: "Email não encontrado!"});
            }else{
                const verificacaoSenha = await BD.user.find(e => e.senha == senha);

                if(!verificacaoSenha){
                    res.status(401).json({mensagem: "Senha invalida!"});
                }else{
                    res.status(200).json({mensagem: "Logim realizado!"});
                }
                
            }
        }catch{
            res.status(401).json({mensagem: "Erro"});
        }
    }
}