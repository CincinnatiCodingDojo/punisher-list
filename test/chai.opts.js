import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiCheerio from 'chai-cheerio';
import chaiImmutable from 'chai-immutable';

chai.use(sinonChai);
chai.use(chaiCheerio);
chai.use(chaiImmutable);
chai.should();
