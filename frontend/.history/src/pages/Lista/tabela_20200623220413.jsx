const { extend } = require("jquery");
$.DataTable = require('datatables.net');

class Tabela extends Component{
    componentDidMount(){
        $(this.refs.main).DataTable({
            
        })
    }
}