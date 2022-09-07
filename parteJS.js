class Produto {


constructor(){

    this.array = []
    this.id = 0
    this.acoes = ''
    this.editeId = null

}

editar(){

    var produto = this.lerClique()
    if (this.seVazio(produto) == true) {
        if (this.editeId == null) {
            this.adicionarNaArray(produto)
        }else{
            this.atualizar(this.editeId, produto)
    }
    }
    
    this.aTabela()
    console.log(produto)

}

lerClique(){

    var produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('texto').value
    produto.valor = document.getElementById('numero').value
    produto.acoes = this.acoes

    return produto
}

seVazio(produto){

    var mensagem = ''

    if (produto.nomeProduto == 0) {
        mensagem += 'Digite o nome de um Produto \n'
    }
    if (produto.valor == 0) {
        mensagem += 'Digite o valor de um Produto'
    }
    if (mensagem != 0) {
        alert(mensagem)
        return false
    }
    return true
}

adicionarNaArray(produto){

    produto.valor = Number(produto.valor)
    this.array.push(produto)
    this.id ++
}

remover(){

    document.getElementById('texto').value = ''
    document.getElementById('numero').value = ''

    document.getElementById('but1').innerText = 'ADICIONAR'
    this.editeId = null
}

aTabela(){

    var tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.array.length; i++) {
        
        var tr = tbody.insertRow()

        var td_id = tr.insertCell()
        var td_nomeProduto = tr.insertCell()
        var td_valor = tr.insertCell()
        var td_acoes = tr.insertCell()

        td_id.innerText = this.array[i].id
        td_nomeProduto.innerText = this.array[i].nomeProduto
        td_valor.innerText = this.array[i].valor
        td_acoes.innerText = this.array[i].acoes


        var adicionarProduto = document.createElement('img')
        var removerProduto = document.createElement('img')

        adicionarProduto.src = './carrinho.png'
        removerProduto.src = './del.png'

        td_acoes.appendChild(adicionarProduto)
        td_acoes.appendChild(removerProduto)

        adicionarProduto.setAttribute("onclick", "produto.adicionarComCarrinho("+JSON.stringify(this.array[i])+")")
        removerProduto.setAttribute("onclick", "produto.removerComCarrinho("+this.array[i].id+")")
    }
}

adicionarComCarrinho(dados){

        this.editeId = dados.id

        document.getElementById('texto').value = dados.nomeProduto
        document.getElementById('numero').value = dados.valor

        document.getElementById('but1').innerText = 'ATUALIZAR'
}

atualizar(id, produto){

    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].id == id) {
            this.array[i].nomeProduto = produto.nomeProduto
            this.array[i].valor = produto.valor
        }
        
    }
}

removerComCarrinho(id){

        if (confirm('Deseja realmente deletar o produto ? ' + id )) {
            
        

        var tbody = document.getElementById('tbody')

        for (let i = 0; i < this.array.length; i++) {
           
            if (this.array[i].id == id) {
                tbody.deleteRow(i)
                this.array.splice(i,1)
            }
                }       
             }
}










}

var produto = new Produto