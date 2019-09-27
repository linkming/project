/* eslint-disable one-var */
<template>
  <div class="directive">
    <ul v-scroll>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Directive',
  directives: {
    scroll: {
      inserted(el, vnode) {
        window.scroll = function(el) {
          console.log(arguments)
        }
      }
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    // fn() {
    //   if (!Shotgun) { var Shotgun = {} }
    //   if (!Shotgun.Js) { Shotgun.Js = {} }
    //   Shotgun.Js.Base64 = {
    //     _table: [
    //       'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    //       'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
    //       'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    //       'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'
    //     ],

    //     encode: function(bin) {
    //       var codes = []
    //       var un = 0
    //       un = bin.length % 3
    //       if (un == 1) { bin.push(0, 0) } else if (un == 2) { bin.push(0) }
    //       for (var i = 2; i < bin.length; i += 3) {
    //         var c = bin[i - 2] << 16
    //         c |= bin[i - 1] << 8
    //         c |= bin[i]
    //         codes.push(this._table[c >> 18 & 0x3f])
    //         codes.push(this._table[c >> 12 & 0x3f])
    //         codes.push(this._table[c >> 6 & 0x3f])
    //         codes.push(this._table[c & 0x3f])
    //       }
    //       if (un >= 1) {
    //         codes[codes.length - 1] = '='
    //         bin.pop()
    //       }
    //       if (un == 1) {
    //         codes[codes.length - 2] = '='
    //         bin.pop()
    //       }
    //       return codes.join('')
    //     },
    //     decode: function(base64Str) {
    //       var i = 0
    //       var bin = []
    //       // eslint-disable-next-line one-var
    //       var x = 0, code = 0, eq = 0
    //       while (i < base64Str.length) {
    //         var c = base64Str.charAt(i++)
    //         var idx = this._table.indexOf(c)
    //         if (idx === -1) {
    //           switch (c) {
    //             case '=': idx = 0; eq++; break
    //             case ' ':
    //             case '\n':
    //             case '\r':
    //             case '\t':
    //               continue
    //             default:
    //               throw { 'message': '\u0062\u0061\u0073\u0065\u0036\u0034\u002E\u0074\u0068\u0065\u002D\u0078\u002E\u0063\u006E\u0020\u0045\u0072\u0072\u006F\u0072\u003A\u65E0\u6548\u7F16\u7801\uFF1A' + c }
    //           }
    //         }
    //         if (eq > 0 && idx !== 0) { throw { 'message': '\u0062\u0061\u0073\u0065\u0036\u0034\u002E\u0074\u0068\u0065\u002D\u0078\u002E\u0063\u006E\u0020\u0045\u0072\u0072\u006F\u0072\u003A\u7F16\u7801\u683C\u5F0F\u9519\u8BEF\uFF01' } }

    //         code = code << 6 | idx
    //         if (++x !== 4) { continue }
    //         bin.push(code >> 16)
    //         bin.push(code >> 8 & 0xff)
    //         bin.push(code & 0xff)
    //         code = x = 0
    //       }
    //       if (code !== 0) { throw { 'message': '\u0062\u0061\u0073\u0065\u0036\u0034\u002E\u0074\u0068\u0065\u002D\u0078\u002E\u0063\u006E\u0020\u0045\u0072\u0072\u006F\u0072\u003A\u7F16\u7801\u6570\u636E\u957F\u5EA6\u9519\u8BEF' } }
    //       if (eq === 1) { bin.pop() } else if (eq == 2) {
    //         bin.pop()
    //         bin.pop()
    //       } else if (eq > 2) { throw { 'message': '\u0062\u0061\u0073\u0065\u0036\u0034\u002E\u0074\u0068\u0065\u002D\u0078\u002E\u0063\u006E\u0020\u0045\u0072\u0072\u006F\u0072\u003A\u7F16\u7801\u683C\u5F0F\u9519\u8BEF\uFF01' } }

    //       return bin
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
  .directive{
      padding: 12px;
      height: 600px;
      border: 1px solid #ccc;
      overflow: scroll;
  }
</style>
