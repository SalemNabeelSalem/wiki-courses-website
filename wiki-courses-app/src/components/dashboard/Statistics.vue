<template>
  <div id="statistics">
    <div class="container">
      <h2 class="h2-responsive my-4 py-2 bg-info text-white">
        Wiki Courses Statistics
      </h2>

      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="service-box">
            <div class="service-icon lecturer-color">
              <div class="front-content">
                <i class="fa fa-users"></i>
                <h3>All Lecturers</h3>
              </div>
            </div>
            <div class="service-content">
              <h3>{{ lecturersStatics.totalLecturers }}</h3>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="service-box">
            <div class="service-icon lecturer-color">
              <div class="front-content">
                <i class="fa fa-user"></i>
                <h3>Active Lecturers</h3>
              </div>
            </div>
            <div class="service-content">
              <h3>{{ lecturersStatics.activeLecturers }}</h3>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="service-box">
            <div class="service-icon lecturer-color">
              <div class="front-content">
                <i class="fa fa-user-times"></i>
                <h3>Not Active Lecturers</h3>
              </div>
            </div>
            <div class="service-content">
              <h3>{{ lecturersStatics.notActiveLecturers }}</h3>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="service-box">
            <div class="service-icon lecturer-color">
              <div class="front-content">
                <i class="fa fa-male"></i>
                <h3>Male Lecturers</h3>
              </div>
            </div>
            <div class="service-content">
              <h3>{{ lecturersStatics.maleLecturers }}</h3>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="service-box">
            <div class="service-icon lecturer-color">
              <div class="front-content">
                <i class="fa fa-female"></i>
                <h3>Female Lecturers</h3>
              </div>
            </div>
            <div class="service-content">
              <h3>{{ lecturersStatics.femaleLecturers }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Statistics",

  data() {
    return {
      lecturersStatics: []
    };
  },

  mounted() {
    this.fetchLecturersStatics();
  },

  methods: {
    fetchLecturersStatics() {
      axios
        .get("http://localhost:8383/api/v1/lecturer-statics")
        .then(response => {
          this.lecturersStatics = response.data;

          console.log(this.lecturersStatics);
        })
        .catch(error => {
          console.error("Error when fetch all lecturers statics => ", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
  text-align: left;
  text-transform: capitalize;
}

.service-box {
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.service-icon {
  width: 100%;
  height: 220px;
  padding: 20px;
  text-align: center;
  transition: all 0.5s ease;
}

.service-content {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  width: 100%;
  height: 220px;
  padding: 20px;
  text-align: center;
  transition: all 0.5s ease;
  background-color: #474747;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  -webkit-transform: translateY(110px) rotateX(-90deg);
  -moz-transform: translateY(110px) rotateX(-90deg);
  -ms-transform: translateY(110px) rotateX(-90deg);
  -o-transform: translateY(110px) rotateX(-90deg);
  transform: translateY(110px) rotateX(-90deg);
}

.service-box .service-icon .front-content {
  position: relative;
  top: 80px;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.service-box .service-icon .front-content i {
  font-size: 28px;
  color: #fff;
  font-weight: normal;
}

.service-box .service-icon .front-content h3 {
  font-size: 22px;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
  text-transform: capitalize;
}

.service-box .service-content h3 {
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  text-transform: uppercase;
  margin-top: 68px;
}

.service-box .service-content p {
  font-size: 18px;
  color: #b1b1b1;
  margin: 0;
}

.section-color {
  background-color: #007bff;
}

.classification-color {
  background-color: #009688;
}

.lecturer-color {
  background-color: #6d4c41;
}

.service-box:hover .service-icon {
  opacity: 0;
  -webkit-transform: translateY(-110px) rotateX(90deg);
  -moz-transform: translateY(-110px) rotateX(90deg);
  -ms-transform: translateY(-110px) rotateX(90deg);
  -o-transform: translateY(-110px) rotateX(90deg);
  transform: translateY(-110px) rotateX(90deg);
}

.service-box:hover .service-content {
  opacity: 1;
  -webkit-transform: rotateX(0);
  -moz-transform: rotateX(0);
  -ms-transform: rotateX(0);
  -o-transform: rotateX(0);
  transform: rotateX(0);
}
</style>
