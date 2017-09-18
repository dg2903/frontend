import React, {Component} from 'react';
import './Info.css';
import '../css/iconsmind.css';

class InfoTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };

    this.active = {
      color: '#4286f4',
      outline: 'none'
    };
    this.inactive = {};
  };

  customChange = (index) => {
    this.setState({
      activeTab: index
    });
  };

  buildButton = (content, index) => {
    var clazz = 'InfoButton ' + (index !== (this.tabContent.length-1) && 'midBorder')
    return (
      <button key={index} className={clazz} style={this.state.activeTab === index ? this.active : this.inactive} onClick={() => {this.customChange(index)}}>
      <span className={'span ' + content.icon}/> <br/>
        {content.btnName}
      </button>
    );
  };

  buildContent = (content, index) => {
    var clazz = (this.state.activeTab === index ? 'active' : 'inactive')
    return (
      <div key={index} id='tabContent' className={clazz}>
        {content.text}
      </div>
    );
  };

  tabContent = [{ btnName: 'Complete Form',
                  text: <div> The application is the next first step of the loan process. With the aid of a mortgage professional,
                              the borrower completes the application and provides all Requested Documentation.
                              <br/> <br/>
                              A loan application is not considered complete until you have given us at least the following information:
                              (1) Your name, (2) Your income, (3) Your Social Security number (and authorization to check your credit),
                              (4) The address of the home you plan to purchase or refinance, (5) An estimate of the home's value
                              and (6) The loan amount you want to borrow.
                        </div>,
                  icon: 'icon-Add-File'}
                  ,
                  { btnName: 'Credit Check',
                    text:  <div>  The mortgage industry tends to create its own language, and credit rating is no different. BC mortgage
                                  lending gets its name from the grading of one's credit based on such things as payment history, amount
                                  of debt payments, bankruptcies, equity position, credit scores, etc.
                                  <br/> <br/>
                                  Credit scoring is a statistical method of assessing the credit risk of a mortgage application. The
                                  score looks at the following items: past delinquencies, derogatory payment behavior, current debt
                                  levels, length of credit history, types of credit and number of inquires.
                            </div>,
                    icon: 'icon-Checked-User'}
                  ,
                  { btnName: 'House Selection',
                    text:  <div>  You may have already started shopping online via real estate portals like Zillow, Trulia or Redfin. At
                                  this stage, it’s a good idea to start working with a real estate agent and viewing homes.
                                  <br/> <br/>
                                  Agents may know about homes that are coming on the market before the listings are made public. It’s
                                  good to have a professional with his or her ear on the ground in the market where you want to buy.
                            </div>,
                    icon: 'icon-Love-User'}
                  ,
                  { btnName: 'Upload Documents',
                    text: <div> The underwriter is the key decision-maker. They closely evaluate all the documentation prepared by the loan
                                processor in the loan package. They cross check to see if the borrower and property match the eligibility
                                requirements of the loan product for which the borrower applied. For example, for a VA loan, the underwriter
                                will verify the borrower’s military service.
                                <br/> <br/>
                                Underwriters review at the borrower’s credit history and their capacity to repay the loan. The collateral
                                (the property) is also weighed into the decision. They verify information and double check for accuracy.
                                They’ll sniff out any red flags that indicate potential fraud.
                          </div>,
                    icon: 'icon-Upload-toCloud'}
                ]

  render() {
    return (
      <div>
        <div id='TabsNav'>
          {this.tabContent.map(this.buildButton)}
        </div>
        <div id='TabContents'>
          {this.tabContent.map(this.buildContent)}
        </div>
      </div>
    );
  };
}

class Info extends Component {
  render() {
    return (
      <div  className='container-fluid mainDiv'>
        <div>
          <InfoTabs />
        </div>
      </div>
    )
  }
}

export default Info;
