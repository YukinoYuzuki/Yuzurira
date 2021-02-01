var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "teratoidfoil455",
		password: "oauth:3tv121gvlkpfi36wqxuupnqst8pag8",  
	},
	channels: ['#gaules', '#inr1tv', '#marcobc', '#murilo_rt', '#jeffaocs', '#pescocofino', '#csrfps', '#mibrtv', '#marcaorx', '#sheviiioficial', '#brnwowzk1', '#gabepeixe', '#stev3z', '#Vovo', '#furiatv', '#narigafps', '#stereonline', '#skipnho', '#skipnholive', '#saullo', '#mch_agg', '#nobru', '#stereofflinex', '#baiano', '#satoru_gp', '#raulzitoyt', '#pedro017yt', '#ingredybarbi', '#dilera', '#oestagiario', '#sr_thulium', '#arecs_ff', '#loud_gs', '#woodszin', '#myztezizmx',  '#leogullo', '#jvnq', '#jonvlogs', '#',   ] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, p
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
