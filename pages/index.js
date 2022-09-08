import Head from "next/head";
import styles from "../styles/Home.module.css";
import Description from "../components/Description";
import Reservations from "../components/Reservations";
import { Loader } from "@googlemaps/js-api-loader";
import React, { Component } from "react";
import Reviews from "../components/Review";
import axios from "axios";
import Header from "../components/Header";
import Map, { StaticGoogleMap, Marker, Path } from "../components/Map";
import Gallery from "../components/Gallery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
      property: {
        prop_id: -1,
        title: "",
        price: "",
        specs: "",
        about: "",
        prop_space: "",
        guest: "",
        other: "",
        number_street: "",
        us_state: "",
        zip: "",
        host: "",
        amenities: { ameniGroups: [] },
      },

      prop_id: [],
      stars: [],
      comment: [],

      users: [],
      reservations: {
        startDate: [],
        endDate: [],
      },
      mapLocation: "",
    };
  }

  componentDidMount() {
    axios.get("/api/properties").then((res) => {
      this.setState((prevState) => ({
        property: res.data.properties[0],
      }));
    });

    axios.get("/api/users").then((res) => {
      this.setState({
        users: res.data.users,
        host: res.data.users[0].name_firstlast,
      });
    });

    axios.get("/api/comments").then((res) => {
      this.setState({
        comment: res.data.comments,
        stars: res.data.comments[0].stars,
      });
    });

    axios.get("/api/reservations").then((res) => {
      this.setState({
        startDate: res.data.startDate,
        endDate: res.data.endDate,
      });
    });

    // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    // let address = encodeURIComponent(
    //   this.state.property.number_street + ", " + this.state.property.us_state + " " + this.state.property.zip
    // );
    // const mapGet = await axios.get(
    //   `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    // );
    // this.setState({ mapLocation: mapGet.results[0]["geometry"]["location"] });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>chairbnb</title>
        </Head>

        {/* 
        Formatting:
        Header
        Photos
        Reservations
        Description
        Calendar
        Reviews
        Map
         */}

        <Header />

        <Gallery />

        <Reservations
          property={this.state.property}
          stars={this.state.stars}
          reservations={this.state.reservations}
        />

        <Description property={this.state.property} host={this.state.host} />

        <Reviews reviews={this.state.comment} users={this.state.users} />

        <Map location={this.state.property} />

        <main className={styles.main}></main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}
