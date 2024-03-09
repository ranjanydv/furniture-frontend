import Upcoming from '../../../../assets/images/icons/cat-icon3.svg'
import Processing from '../../../../assets/images/icons/processing.svg'
import Completed from '../../../../assets/images/icons/completed.svg'
import Apple from '../../../../assets/images/icons/apple.svg'

const DashboardContentTab = () => {
    return (
        <>
            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                 aria-labelledby="v-pills-dashboard-tab">
                <div className="dashboard-area box--shadow">
                    <div className="row g-4">
                        <div className="col-md-6 col-sm-6">
                            <div className="dashboard-card hover-border1 wow fadeInDown" data-wow-duration="1.5s"
                                 data-wow-delay=".2s">
                                <div className="header">
                                    <h5>Upcoming Auctions</h5>
                                </div>
                                <div className="body">
                                    <div className="counter-item">
                                        <h2>01</h2>
                                    </div>
                                    <div className="icon">
                                        <img height={60} width={60} className={"svg-image"} src={Upcoming}
                                             alt={Upcoming.toString()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="dashboard-card hover-border1 wow fadeInDown" data-wow-duration="1.5s"
                                 data-wow-delay=".4s">
                                <div className="header">
                                    <h5>Live Auctions</h5>
                                </div>
                                <div className="body">
                                    <div className="counter-item">
                                        <h2>200</h2>
                                    </div>
                                    <div className="icon">
                                        <img height={40} width={40} className={"svg-image"} src={Processing}
                                             alt={Processing.toString()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="dashboard-card hover-border1 wow fadeInDown" data-wow-duration="1.5s"
                                 data-wow-delay=".6s">
                                <div className="header">
                                    <h5>Events</h5>
                                </div>
                                <div className="body">
                                    <div className="counter-item">
                                        <h2>160</h2>
                                    </div>
                                    <div className="icon">
                                        <img height={40} width={40} className={'svg-image'} src={Apple}
                                             alt={Processing.toString()}/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="dashboard-card hover-border1 wow fadeInDown" data-wow-duration="1.5s"
                                 data-wow-delay=".8s">
                                <div className="header">
                                    <h5>Auctions Completed</h5>
                                </div>
                                <div className="body">
                                    <div className="counter-item">
                                        <h2>22</h2>
                                    </div>
                                    <div className="icon">
                                        <img height={40} width={40} src={Completed} className={'svg-image'}
                                             alt={Completed.toString()}/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContentTab