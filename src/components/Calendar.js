import React from "react";
import rightArrow from "../imgs/right-arrow.svg";
import leftArrow from "../imgs/left-arrow.svg";

const Calendar = () => {
  return (
    <div className="calendar">
      <div class="calendar__month-indicator">
        <img src={leftArrow} alt="" />
        <time datetime="2019-02">
          <b>Marzo 2021</b>
        </time>
        <img src={rightArrow} alt="" />
      </div>
      <div class="calendar__day-of-week">
        <div>lun</div>
        <div>mar</div>
        <div>mier</div>
        <div>jue</div>
        <div>vie</div>
        <div>sab</div>
        <div>dom</div>
      </div>

      <div class="calendar__date-grid">
        <button>
          <time datetime="2019-02-01">28</time>
        </button>
        <button>
          <time datetime="2019-02-01">29</time>
        </button>
        <button>
          <time datetime="2019-02-01">30</time>
        </button>
        <button>
          <time datetime="2019-02-01">1</time>
        </button>
        <button>
          <time datetime="2019-02-02">2</time>
        </button>
        <button>
          <time datetime="2019-02-03">3</time>
        </button>
        <button>
          <time datetime="2019-02-04">4</time>
        </button>
        <button>
          <time datetime="2019-02-05">5</time>
        </button>
        <button>
          <time datetime="2019-02-06">6</time>
        </button>
        <button>
          <time datetime="2019-02-07">7</time>
        </button>
        <button>
          <time datetime="2019-02-08">8</time>
        </button>
        <button>
          <time datetime="2019-02-09">9</time>
        </button>
        <button>
          <time datetime="2019-02-10">10</time>
        </button>
        <button>
          <time datetime="2019-02-11">11</time>
        </button>
        <button>
          <time datetime="2019-02-12">12</time>
        </button>
        <button>
          <time datetime="2019-02-13">13</time>
        </button>
        <button>
          <time datetime="2019-02-14">14</time>
        </button>
        <button>
          <time datetime="2019-02-15">15</time>
        </button>
        <button>
          <time datetime="2019-02-16">16</time>
        </button>
        <button>
          <time datetime="2019-02-17">17</time>
        </button>
        <button>
          <time datetime="2019-02-18">18</time>
        </button>
        <button>
          <time datetime="2019-02-19">19</time>
        </button>
        <button>
          <time datetime="2019-02-20">20</time>
        </button>
        <button>
          <time datetime="2019-02-21">21</time>
        </button>
        <button>
          <time datetime="2019-02-22">22</time>
        </button>
        <button>
          <time datetime="2019-02-23">23</time>
        </button>
        <button>
          <time datetime="2019-02-24">24</time>
        </button>
        <button>
          <time datetime="2019-02-25">25</time>
        </button>
        <button>
          <time datetime="2019-02-26">26</time>
        </button>
        <button>
          <time datetime="2019-02-27">27</time>
        </button>
        <button>
          <time datetime="2019-02-28">28</time>
        </button>

        <button>
          <time datetime="2019-02-28">29</time>
        </button>
        <button>
          <time datetime="2019-02-28">30</time>
        </button>
        <button>
          <time datetime="2019-02-28">31</time>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
