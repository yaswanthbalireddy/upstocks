import React from "react";
import { Form, Input, Modal, Row, Col, Button, InputNumber } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";
import { RiBriefcaseLine } from "react-icons/ri";
import { UpOutlined } from "@ant-design/icons";
import { AiOutlineUnorderedList } from "react-icons/ai";
import "./Project.css";
import Icon from ".././Images/Icon.png.png";

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modal: false, data: [], result: 0 };
  }

  onFinish = (values) => {
    console.log(values);
    let existData = this.state?.data?.length > 0 ? this.state.data : [];
    existData.push(values);
    console.log(existData);
    this.setState({ data: existData, modal: false });
    this.cal(existData);
  };

  cal = (data) => {
    let res = 0;
    data?.map((e) => (res += e?.mtm));
    let formatted = res.toLocaleString("en-US");
    console.log(formatted, "bvcchgvukv");
    console.log(res, "mknkjhvyjcvgh");
    this.setState({ result: res });
  };

  render() {
    const { modal, data, result } = this.state;
    console.log(data);
    return (
      <>
        <div className="main-con">
          <Row className="top-con">
            <div className="sub-con">
              <span>
                <GiHamburgerMenu className="icon" />
              </span>
              <h1 className="heading">Portfolio</h1>
            </div>
            <span>
              <CiSearch
                className="icon1"
                onClick={() => this.setState({ modal: true })}
              />
            </span>
          </Row>
        </div>

        <div style={{ minHeight: "75vh" }}>
          <Row style={{ width: "100%" }}>
            <button
              className="button"
              style={{ borderBottom: "1px solid #0f3f6c" }}
            >
              POSITIONS
            </button>
            <button className="button" style={{ color: "#7f7f7fbd" }}>
              HOLDINGS
            </button>
          </Row>
          {data?.map((data) => (
            <>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Row
                  style={{
                    width: "95%",
                    justifyContent: "space-around",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p className="para">{data?.bank}</p>
                  <button className="buttons">{data?.nse}</button>
                  <button className="buttons">{data?.date}</button>
                  <button className="buttons">{data?.ce}</button>
                  <button
                    className="buttons"
                    style={{ backgroundColor: "#e5dce6" }}
                  >
                    {data?.delivery}
                  </button>
                </Row>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-20px",
                }}
              >
                <Row
                  style={{
                    width: "90%",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#696363b0", fontSize: "12px" }}>
                    NET QTY
                    <span
                      className="para"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      {` ${data?.net}`}
                    </span>
                  </p>
                  <p style={{ color: "#696363b0", fontSize: "12px" }}>
                    MTM{"  "}
                    <span
                      className="para"
                      style={{
                        color: data?.mtm.toString().includes("-")
                          ? "red"
                          : "#50C878",
                        fontSize: "18px",
                        fontWeight: "400",
                      }}
                    >
                      {`₹ ${parseFloat(data?.mtm).toFixed(2)}`}
                    </span>
                  </p>
                </Row>
              </div>
              <hr
                style={{
                  width: "90%",
                  marginTop: "-6px",
                  borderColor: "#ebebeb",
                }}
              />
            </>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#dfdfdf",
            minHeight: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#747474" }}>
              P&L{" "}
              <span>
                <UpOutlined style={{ fontSize: "10px" }} />
              </span>
            </span>
            <span
              className="para"
              style={{
                color: result?.toString().includes("-") ? "red" : "#50C878",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              {`₹ ${parseFloat(result)?.toFixed(2)}`}
            </span>
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Row
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <AiOutlineUnorderedList className="icons" />
              </span>
              <p className="tabs">Watchlist</p>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <img className="icon2" src={Icon} alt={"Icon"} />
              </span>
              <p className="tabs">Orders</p>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <RiBriefcaseLine
                  className="icons"
                  style={{ color: "#1818b7" }}
                />
              </span>
              <p className="tabs" style={{ color: "#1818b7" }}>
                Portfolio
              </p>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <BiRupee className="icons" />
              </span>
              <p className="tabs">Funds</p>
            </Col>
          </Row>
        </div>

        {modal && (
          <Modal
            title="Basic Modal"
            open={modal}
            onCancel={() => {
              this.setState({
                modal: false,
              });
            }}
            style={{ minHeight: "100vh" }}
            destroyOnClose={true}
            footer={[
              <div>
                <Button
                  onClick={() => {
                    this.setState({
                      modal: false,
                    });
                  }}
                  //   style={{
                  //     height: "35px",
                  //     width: "100px",
                  //     borderRadius: "5px",
                  //     marginRight: "25px",
                  //   }}
                  type="ghost"
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  //   style={{
                  //     height: "35px",
                  //     width: "100px",
                  //     borderRadius: "5px",
                  //   }}
                  form="form"
                >
                  Save
                </Button>
              </div>,
            ]}
          >
            <Form id={"form"} onFinish={this.onFinish}>
              <Row>
                <Col span={24}>
                  <span>Bank</span>
                  <Form.Item
                    name={"bank"}
                    rules={[{ required: true, message: "Please Enter Bank!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>NSE</span>
                  <Form.Item
                    name={"nse"}
                    rules={[{ required: true, message: "Please Enter NSE!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>Date</span>
                  <Form.Item
                    name={"date"}
                    rules={[{ required: true, message: "Please Enter Date!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>Ce or Pe</span>
                  <Form.Item
                    name={"ce"}
                    rules={[
                      { required: true, message: "Please Enter CE OR PE!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>Delivery</span>
                  <Form.Item
                    name={"delivery"}
                    rules={[
                      { required: true, message: "Please Enter Delivery!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>NET QYT</span>
                  <Form.Item
                    name={"net"}
                    rules={[{ required: true, message: "Please Enter Net!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>MTM</span>
                  <Form.Item
                    name={"mtm"}
                    rules={[{ required: true, message: "Please Enter MTM!" }]}
                  >
                    <InputNumber
                      // formatter={(value) =>
                      //   ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      // }
                      // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        )}
      </>
    );
  }
}

export default Project;
