class TicketBuilderDirector {
  constructor(ticketBuilder) {
    this.ticketBuilder = ticketBuilder;
  }

  construct(ticketType) {
    this.ticketBuilder.buildType();
    this.ticketBuilder.buildBarcode();
    this.ticketBuilder.buildUserInformation();

    if (ticketType === 'flexi')
      this.ticketBuilder.buildValidFor();

    return;
  }
}

class TicketBuilder {
  /**
  * Builds ticket type
  * @abstract
  */
  buildType() {

  }

  /**
  * Builds ticket barcode
  * @abstract
  */
  buildBarcode() {

  }

  /**
  * Builds ticket information
  * @abstract
  */
  buildUserInformation() {

  }


  /**
  * Builds ticket number of valid days
  * @abstract
  */
  buildValidFor() {

  }


  /**
  * Returns construction result
  * @abstract
  */
  getResult() { }
}

class StandardTicketBuilder extends TicketBuilder {
  constructor() {
    super();
    this.singleTicket = {};
  }

  buildType() {
    this.singleTicket.type = 'standard';
    return;
  }

  buildBarcode() {
    this.singleTicket.barcodeString = '74%&*22823n!@3';
    return;
  }

  buildUserInformation() {
    this.singleTicket.user = {
      name: 'Linus Torvalds'
    };
    return;
  }

  getResult() {
    return this.singleTicket;
  }
}

class FlexiTicketBuilder extends TicketBuilder {
  constructor() {
    super();
    this.flexiTicket = {};
  }
  buildType() {
    this.flexiTicket.type = 'flexi';
    return;
  }

  buildBarcode() {
    this.flexiTicket.barcodeString = '8**4$#@132ndmnd';
    return;
  }

  buildUserInformation() {
    this.flexiTicket.user = {
      name: 'Nikola Tesla'
    };
    return;
  }

  buildValidFor() {
    this.flexiTicket.validFor = 28;
    return;
  }

  getResult() {
    return this.flexiTicket;
  }
}

module.exports = {
  StandardTicketBuilder,
  FlexiTicketBuilder,
  TicketBuilderDirector
}