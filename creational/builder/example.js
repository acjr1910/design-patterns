const {
  StandardTicketBuilder,
  FlexiTicketBuilder,
  TicketBuilderDirector
} = require('./index');

const standardTicketBuilder = new StandardTicketBuilder();
const standardTicketDirector = new TicketBuilderDirector(standardTicketBuilder);
standardTicketDirector.construct('standard');
const standardTicket = standardTicketBuilder.getResult();

const flexiTicketBuilder = new FlexiTicketBuilder();
const flexiTicketDirector = new TicketBuilderDirector(flexiTicketBuilder);
flexiTicketDirector.construct('flexi');
const flexiTicket = flexiTicketBuilder.getResult();

console.log(standardTicket);
console.log(flexiTicket);