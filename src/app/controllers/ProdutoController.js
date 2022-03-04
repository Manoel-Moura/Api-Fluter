import Produto from '../models/Produto';

class ProdutoController {
  async store(req, res) {
    const { nome, ingredientes, preco, categoria, imagemurl } =  
    await Produto.create(
      req.body
    );
    return res.json({ nome, ingredientes, preco, categoria, imagemurl } );
  }

  async get(req, res, next) {
    const produtos = await Produto.findAll();
    res.json(produtos);
  }

  async getId(req, res, next) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ error: 'Esse produto nao existe' });
    } else {
      res.json(produto);
    }
  }

  async update(req, res) {
    const { nome } = req.body;
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ error: 'Esse produto nao existe' });
    } else {
      const newProduto = await produto.update({ nome: nome });
      res.json(newProduto);
    }
  }

  async updatePreco(req, res) {
    const { preco } = req.body;
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ error: 'Esse produto nao existe' });
    } else {
      const newProduto = await produto.update({ preco: preco });
      res.json(newProduto);
    }
  }

  async updateIngredientes(req, res) {
    const { ingrediente } = req.body;
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ error: 'Esse produto nao existe' });
    } else {
      const newProduto = await produto.update({ ingrediente: ingrediente });
      res.json(newProduto);
    }
  }

  async updateCategoria(req, res) {
    const { categoria } = req.body;
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ error: 'Esse produto nao existe' });
    } else {
      const newProduto = await produto.update({ categoria: categoria });
      res.json(newProduto);
    }
  }

  async searchProduto(req, res) {
    const { nome } = req.params;

    const myProdutos = await Produto.findAll({
      where: {
        nome: nome,
      },
    });
    return res.json(myProdutos);
  }

  async updateImage(req, res) {
    const { imagemurl } = req.body;
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (!produto) {
      res.status(404).json({ error: 'Este produto não existe' });
    } else {
      const newProduto = await produto.update({ imagemurl: imagemurl });
      res.json(newProduto);
    }
  }

  async deleteProduto(req, res) {
    const mylist = await Produto.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json('Produto excluido');
  }
}

export default new ProdutoController();