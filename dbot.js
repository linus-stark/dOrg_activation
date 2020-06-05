//genesis dao bot
const Bot = require('../node_modules/lib')
const Web3 = require('web3');
const abi = require('./data/abi')

const endpoint = 'wss://mainnet.infura.io/ws/v3/e4ee2477db6a43d1ba3e090ca1b972ff';
const contractAddress = '0x917a2C4421fdAD00632d89b3E550230A3a0B0A31';
function main() {
  const bot = new Bot()
  const username = 'linus_bot'
    const paperkey = '' 
  bot
    .init(username, paperkey, {verbose: false})
    .then(() => {
      console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)


      async function newfeed() {
        try {
            running = true
            console.log("gendao new prop feed listening")
    
            const web3 = new Web3(new Web3.providers.WebsocketProvider(endpoint));
            var genContract = await new web3.eth.Contract(abi, contractAddress);
              genContract.events.NewProposal((err, result) => {
    
                if (err) {
                    console.log("new "+err)
                process.exit();}
    
    
              else {
                  async function newboi(){
                    console.log(result.returnValues._proposer)
                
    
                 
            const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
            const message = {
              body: `New Proposal! ID: ${result.returnValues._proposalId}\n organization: ${result.returnValues._organization} 
              \n Proposer ${result.returnValues._proposer}
              `,
            }
            bot.chat
            .send(channel, message)
            .then(() => {
              console.log('Message sent!')
            })
            .catch(error => {
              console.error(error)
            })

            
        }
        newboi()
    }
    
    })
    
    
    }catch (error) {
            console.error(error)
        }}




      async function votefeed() {
        try {
            console.log("gendao vote feed listening")
    
            const web3 = new Web3(new Web3.providers.WebsocketProvider(endpoint));
            var genContract = await new web3.eth.Contract(abi, contractAddress);
              genContract.events.Stake((err, result) => {
    
                if (err) {
                    console.log("vote "+err)
                process.exit();}
    
    
              else {
                  async function voteboi(){
                    console.log(result.returnValues._voter)                
                 
            const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
            const message = {
              body: `New Vote for ${result.returnValues._proposalId}\n organization: ${result.returnValues._organization} 
              \n Voter ${result.returnValues._voter}
              `,
            }
            bot.chat
            .send(channel, message)
            .then(() => {
              console.log('Message sent!')
            })
            .catch(error => {
              console.error(error)
            })

            
        }
        voteboi()
    }
    
    })
    
    
    }catch (error) {
            console.error(error)
        }}

        



      async function stakefeed() {
        try {
            console.log("gendao stake feed listening")
    
            const web3 = new Web3(new Web3.providers.WebsocketProvider(endpoint));
            var genContract = await new web3.eth.Contract(abi, contractAddress);
              genContract.events.Stake((err, result) => {
    
                if (err) {
                    console.log("stake"+err)
                process.exit();}
    
    
              else {
                  async function stakeboi(){
                    console.log(result.returnValues._staker)
                 var gweidiv = await p3dContract.methods.dividendsOf(result.returnValues.customerAddress).call()
                
    
                 
            const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
            const message = {
              body: `New stake for ${result.returnValues._proposalId}\n organization: ${result.returnValues._organization} 
              \n Staker ${result.returnValues._staker}
              `,
            }
            bot.chat
            .send(channel, message)
            .then(() => {
              console.log('Message sent!')
            })
            .catch(error => {
              console.error(error)
            })

            
        }
        stakeboi()
    }
    
    })
    
    
    }catch (error) {
            console.error(error)
        }}

stakefeed();
votefeed();
newfeed();



      
      
      
      
   
    })}

main()