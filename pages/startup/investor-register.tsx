import Head from "next/head";
import React from "react";

import Helpers from "@/modules/Helper";

import axios from "axios";
import Select from 'react-select';

import Link from "next/link";
import Globals from "@/modules/Globals";
import JsLoader from "@/modules/JsLoader";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import { CountriesData } from "@/contants/countryData";


function closePopup() {
    $("#popupModel").addClass("d-none");
}


const preFixStyle: React.CSSProperties = {
    position: 'absolute',
    paddingTop: '18px',
    background: 'rgba(192,192,192,.6588235294)',
    width: '48px',
    height: '3.6875rem',
    borderTopLeftRadius: '.25rem',
    borderBottomLeftRadius: '.25rem',
    top: '5px',
    left: '18px',
    textAlign: 'center'
};

// var startupEmails: Array<string>;
export default class RegisterPage extends React.Component<
    {},
    {
        startupEmails: Array<string>;
        isLoaded: boolean
    }
> {
    private languageID: string = "00000000-0000-0000-0000-000000000000";

    constructor(props: any) {
        super(props);
        this.state = {
            startupEmails: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        $(".trailer-section").addClass("d-none");
        $("#bottom-strip").addClass("d-none");
        axios.get(`${Globals.API_URL}RegisterAPI/getExistingEmails`).then((r: any) => {
            const dataModel: Array<string> = r.data;
            console.log(dataModel);
            this.setState({
                isLoaded: true,
                startupEmails: dataModel,
            })
        });

        // $.ajax({
        //   url: `${Globals.API_URL}RegisterAPI/getInvestorEmails`,
        //   dataType: 'json',
        //   type: 'GET',
        //   contentType: 'application/json',
        //   processData: false,
        //   success: function (data) {
        //     if (data) {
        //       startupEmails = data;
        //       this.setState({
        //         pageData: response.item,
        //         isLoaded: true
        //       });
        //     }
        //   }
        // });

    }

    checkEmailExist(email: string) {
        const { startupEmails } = this.state;
        $(".email-error").addClass("d-none");
        if (email) {
            startupEmails.map((e: string) => {
                if (email.toLowerCase() == e.toLowerCase()) {
                    $(".email-error").removeClass("d-none");
                }
                else {
                }
            })
        }
    }

    uploadImage(id: string) {
        var image = document.getElementById(id);
        $("." + id).val('');
        if ($("#" + id).val()) {
            var file = Helpers.getUploadFile(image);
            const reader = new FileReader();
            reader.onloadend = () => {

                var dataType = reader.result?.toString().substring(0, reader.result?.toString().indexOf(";")).replace("data:", "");

                var base64String = reader.result?.toString()
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                var FinalImage = base64String?.toString();

                axios.post(`${Globals.API_URL}RegisterAPI/UploadImage`, {
                    "ImageBase64": FinalImage,
                    "dataType": dataType
                })
                    .then((data) => {
                        if (data) {
                            $("." + id).val(data.data);
                        }
                    })
            };
            reader.readAsDataURL(file);
        }
    }

    register() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var password = $(".password").val();
        var jobtitle = $(".jobtitle").val();
        var phone = $("#phone").val();
        var website = $(".website").val();
        var country = $(".country").val();
        var investortype = $(".investortype").val();
        var startuplogo = $(".startuplogo").val();
        var description = $(".description").val();
        var ticketsize = $(".ticketsize").val();
        var encPassword = String(password);

        var Sector = "";
        $.each($("input[name='field[262][]']:checked"), function () {
            // Sector.push($(this).val());
            Sector += $(this).val() + ", ";
        });

        var Stage = "";
        $.each($("input[name='field[264][]']:checked"), function () {
            // Stage.push($(this).val());
            Stage += $(this).val() + ", ";
        });

        var focused = "";
        $.each($("input[name='field[265][]']:checked"), function () {
            // focused.push($(this).val());
            focused += $(this).val() + ", ";
        });

        $.ajax({
            url: `${Globals.API_URL}RegisterAPI/Investor`,
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(
                {
                    "firstname": firstname,
                    "lastname": lastname,
                    "email": email,
                    "password": encPassword,
                    "jobtitle": jobtitle,
                    "phone": phone,
                    "website": website,
                    "country": country,
                    "startuplogo": startuplogo,
                    "description": description,
                    "investortype": investortype,
                    "ticketsize": ticketsize,
                    "Sector": Sector,
                    "Stage": Stage,
                    "focused": focused,
                }),
            processData: false,
            success: function (data) {
                if (data) {
                }
            }
        });

    }
    handleSelectChange = (selected: any) => {

        const selectedValues = selected.map((option: any) => option.value)
        $('#focusedCountriesInput').val(selectedValues);

    };

    render(): React.ReactNode {
        const { startupEmails, isLoaded } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />;
        }

        $(".trailer-section").addClass("d-none");
        $("#bottom-strip").addClass("d-none");

        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/investorregistration.js`);

        $("#popupModel").removeClass("d-none");
        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | AIM Startup Investor Register`}</title>
                    <meta name="title" content="AIM Startup Investor Register" />
                    <meta name="description" content="AIM Startup Investor Register" />
                </Head>

                <div className="startup-registerPage-wrapper portfolio-margin-top">

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-4 mb-4">
                                    <h2 className='heading-startup section-heading'>Investor Registration</h2>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-12">

                                    <form method="POST" action="//ac.strategic.ae/proc.php" id="_form_408_" className="_form _form_408 _inline-form  _dark startup-register-form" noValidate>
                                        <input type="hidden" name="u" value="408" />
                                        <input type="hidden" name="f" value="408" />
                                        <input type="hidden" name="s" />
                                        <input type="hidden" name="c" value="0" />
                                        <input type="hidden" name="m" value="0" />
                                        <input type="hidden" name="act" value="sub" />
                                        <input type="hidden" name="v" value="2" />
                                        <input type="hidden" name="or" value="84edec6b58447bfb95e57318bdf096a8" />
                                        <input type="hidden" name="field[38]" value="AIM Startup 2025 - Investor Registration" />
                                        <div className="_form-content">

                                            <div className="row">

                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <input
                                                        type="text"
                                                        itemID="firstname"
                                                        name="firstname"
                                                        placeholder="First Name *"
                                                        id="firstname"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <input
                                                        type="text"
                                                        itemID="lastname"
                                                        name="lastname"
                                                        placeholder="Last Name *"
                                                        id="lastname"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <input
                                                        type="text"
                                                        itemID="email"
                                                        placeholder="Email *"
                                                        name="email"
                                                        id="email"
                                                        className="form-control"
                                                        required
                                                    // onChange={(e) => {
                                                    //   this.checkEmailExist(e.target.value);
                                                    // }}
                                                    />
                                                    <p className="text-danger email-error d-none">Email already exist.</p>
                                                </div>

                                                {/* <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Password: <span className="danger">*</span>
                                                    </label>
                                                    <input type="password" id="field[257]" name="field[257]" className="password form-control" required />
                                                </div> */}

                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <input
                                                        type="text"
                                                        placeholder="Job Title *"
                                                        itemID="field[23]"
                                                        name="field[23]"
                                                        className="jobtitle form-control"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">


                                                <div className="form-group col-12 col-lg-6 col-xl-6">


                                                    <div className="row">
                                                        <div className="col-4 col-md-4">
                                                            <select id="phoneCode" onChange={(e) => $(".pre-fix").html(e.target.value)} className="form-control" required name="phoneCode">
                                                                <option value="">Select Code</option>
                                                                <option value="93">Afghanistan +93</option>
                                                                <option value="358">Åland Islands +358</option>
                                                                <option value="355">Albania +355</option>
                                                                <option value="213">Algeria +213</option>
                                                                <option value="1684">American Samoa +1684</option>
                                                                <option value="376">Andorra +376</option>
                                                                <option value="244">Angola +244</option>
                                                                <option value="1264">Anguilla +1264</option>
                                                                <option value="672">Antarctica +672</option>
                                                                <option value="1268">Antigua & Barbuda +1268</option>
                                                                <option value="54">Argentina +54</option>
                                                                <option value="374">Armenia +374</option>
                                                                <option value="297">Aruba +297</option>
                                                                <option value="61">Australia +61</option>
                                                                <option value="43">Austria +43</option>
                                                                <option value="994">Azerbaijan +994</option>
                                                                <option value="1242">Bahamas +1242</option>
                                                                <option value="973">Bahrain +973</option>
                                                                <option value="880">Bangladesh +880</option>
                                                                <option value="1246">Barbados +1246</option>
                                                                <option value="375">Belarus +375</option>
                                                                <option value="32">Belgium +32</option>
                                                                <option value="501">Belize +501</option>
                                                                <option value="229">Benin +229</option>
                                                                <option value="1441">Bermuda +1441</option>
                                                                <option value="975">Bhutan +975</option>
                                                                <option value="591">Bolivia +591</option>
                                                                <option value="599">Caribbean Netherlands +599</option>
                                                                <option value="387">Bosnia & Herzegovina +387</option>
                                                                <option value="267">Botswana +267</option>
                                                                <option value="55">Bouvet Island +55</option>
                                                                <option value="55">Brazil +55</option>
                                                                <option value="246">British Indian Ocean Territory +246</option>
                                                                <option value="673">Brunei +673</option>
                                                                <option value="359">Bulgaria +359</option>
                                                                <option value="226">Burkina Faso +226</option>
                                                                <option value="257">Burundi +257</option>
                                                                <option value="855">Cambodia +855</option>
                                                                <option value="237">Cameroon +237</option>
                                                                <option value="1">Canada +1</option>
                                                                <option value="238">Cape Verde +238</option>
                                                                <option value="1345">Cayman Islands +1345</option>
                                                                <option value="236">Central African Republic +236</option>
                                                                <option value="235">Chad +235</option>
                                                                <option value="56">Chile +56</option>
                                                                <option value="86">China +86</option>
                                                                <option value="61">Christmas Island +61</option>
                                                                <option value="672">Cocos (Keeling) Islands +672</option>
                                                                <option value="57">Colombia +57</option>
                                                                <option value="269">Comoros +269</option>
                                                                <option value="242">Congo - Brazzaville +242</option>
                                                                <option value="242">Congo - Kinshasa +242</option>
                                                                <option value="682">Cook Islands +682</option>
                                                                <option value="506">Costa Rica +506</option>
                                                                <option value="225">Côte d’Ivoire +225</option>
                                                                <option value="385">Croatia +385</option>
                                                                <option value="53">Cuba +53</option>
                                                                <option value="599">Curaçao +599</option>
                                                                <option value="357">Cyprus +357</option>
                                                                <option value="420">Czechia +420</option>
                                                                <option value="45">Denmark +45</option>
                                                                <option value="253">Djibouti +253</option>
                                                                <option value="1767">Dominica +1767</option>
                                                                <option value="1809">Dominican Republic +1809</option>
                                                                <option value="593">Ecuador +593</option>
                                                                <option value="20">Egypt +20</option>
                                                                <option value="503">El Salvador +503</option>
                                                                <option value="240">Equatorial Guinea +240</option>
                                                                <option value="291">Eritrea +291</option>
                                                                <option value="372">Estonia +372</option>
                                                                <option value="251">Ethiopia +251</option>
                                                                <option value="500">Falkland Islands (Islas Malvinas) +500</option>
                                                                <option value="298">Faroe Islands +298</option>
                                                                <option value="679">Fiji +679</option>
                                                                <option value="358">Finland +358</option>
                                                                <option value="33">France +33</option>
                                                                <option value="594">French Guiana +594</option>
                                                                <option value="689">French Polynesia +689</option>
                                                                <option value="262">French Southern Territories +262</option>
                                                                <option value="241">Gabon +241</option>
                                                                <option value="220">Gambia +220</option>
                                                                <option value="995">Georgia +995</option>
                                                                <option value="49">Germany +49</option>
                                                                <option value="233">Ghana +233</option>
                                                                <option value="350">Gibraltar +350</option>
                                                                <option value="30">Greece +30</option>
                                                                <option value="299">Greenland +299</option>
                                                                <option value="1473">Grenada +1473</option>
                                                                <option value="590">Guadeloupe +590</option>
                                                                <option value="1671">Guam +1671</option>
                                                                <option value="502">Guatemala +502</option>
                                                                <option value="44">Guernsey +44</option>
                                                                <option value="224">Guinea +224</option>
                                                                <option value="245">Guinea-Bissau +245</option>
                                                                <option value="592">Guyana +592</option>
                                                                <option value="509">Haiti +509</option>
                                                                <option value="0">Heard & McDonald Islands +0</option>
                                                                <option value="39">Vatican City +39</option>
                                                                <option value="504">Honduras +504</option>
                                                                <option value="852">Hong Kong +852</option>
                                                                <option value="36">Hungary +36</option>
                                                                <option value="354">Iceland +354</option>
                                                                <option value="91">India +91</option>
                                                                <option value="62">Indonesia +62</option>
                                                                <option value="98">Iran +98</option>
                                                                <option value="964">Iraq +964</option>
                                                                <option value="353">Ireland +353</option>
                                                                <option value="44">Isle of Man +44</option>
                                                                <option value="972">Israel +972</option>
                                                                <option value="39">Italy +39</option>
                                                                <option value="1876">Jamaica +1876</option>
                                                                <option value="81">Japan +81</option>
                                                                <option value="44">Jersey +44</option>
                                                                <option value="962">Jordan +962</option>
                                                                <option value="7">Kazakhstan +7</option>
                                                                <option value="254">Kenya +254</option>
                                                                <option value="686">Kiribati +686</option>
                                                                <option value="850">North Korea +850</option>
                                                                <option value="82">South Korea +82</option>
                                                                <option value="381">Kosovo +381</option>
                                                                <option value="965">Kuwait +965</option>
                                                                <option value="996">Kyrgyzstan +996</option>
                                                                <option value="856">Laos +856</option>
                                                                <option value="371">Latvia +371</option>
                                                                <option value="961">Lebanon +961</option>
                                                                <option value="266">Lesotho +266</option>
                                                                <option value="231">Liberia +231</option>
                                                                <option value="218">Libya +218</option>
                                                                <option value="423">Liechtenstein +423</option>
                                                                <option value="370">Lithuania +370</option>
                                                                <option value="352">Luxembourg +352</option>
                                                                <option value="853">Macao +853</option>
                                                                <option value="389">North Macedonia +389</option>
                                                                <option value="261">Madagascar +261</option>
                                                                <option value="265">Malawi +265</option>
                                                                <option value="60">Malaysia +60</option>
                                                                <option value="960">Maldives +960</option>
                                                                <option value="223">Mali +223</option>
                                                                <option value="356">Malta +356</option>
                                                                <option value="692">Marshall Islands +692</option>
                                                                <option value="596">Martinique +596</option>
                                                                <option value="222">Mauritania +222</option>
                                                                <option value="230">Mauritius +230</option>
                                                                <option value="262">Mayotte +262</option>
                                                                <option value="52">Mexico +52</option>
                                                                <option value="691">Micronesia +691</option>
                                                                <option value="373">Moldova +373</option>
                                                                <option value="377">Monaco +377</option>
                                                                <option value="976">Mongolia +976</option>
                                                                <option value="382">Montenegro +382</option>
                                                                <option value="1664">Montserrat +1664</option>
                                                                <option value="212">Morocco +212</option>
                                                                <option value="258">Mozambique +258</option>
                                                                <option value="95">Myanmar (Burma) +95</option>
                                                                <option value="264">Namibia +264</option>
                                                                <option value="674">Nauru +674</option>
                                                                <option value="977">Nepal +977</option>
                                                                <option value="31">Netherlands +31</option>
                                                                <option value="599">Curaçao +599</option>
                                                                <option value="687">New Caledonia +687</option>
                                                                <option value="64">New Zealand +64</option>
                                                                <option value="505">Nicaragua +505</option>
                                                                <option value="227">Niger +227</option>
                                                                <option value="234">Nigeria +234</option>
                                                                <option value="683">Niue +683</option>
                                                                <option value="672">Norfolk Island +672</option>
                                                                <option value="1670">Northern Mariana Islands +1670</option>
                                                                <option value="47">Norway +47</option>
                                                                <option value="968">Oman +968</option>
                                                                <option value="92">Pakistan +92</option>
                                                                <option value="680">Palau +680</option>
                                                                <option value="970">Palestine +970</option>
                                                                <option value="507">Panama +507</option>
                                                                <option value="675">Papua New Guinea +675</option>
                                                                <option value="595">Paraguay +595</option>
                                                                <option value="51">Peru +51</option>
                                                                <option value="63">Philippines +63</option>
                                                                <option value="64">Pitcairn Islands +64</option>
                                                                <option value="48">Poland +48</option>
                                                                <option value="351">Portugal +351</option>
                                                                <option value="1787">Puerto Rico +1787</option>
                                                                <option value="974">Qatar +974</option>
                                                                <option value="262">Réunion +262</option>
                                                                <option value="40">Romania +40</option>
                                                                <option value="70">Russia +70</option>
                                                                <option value="250">Rwanda +250</option>
                                                                <option value="590">St. Barthélemy +590</option>
                                                                <option value="290">St. Helena +290</option>
                                                                <option value="1869">St. Kitts & Nevis +1869</option>
                                                                <option value="1758">St. Lucia +1758</option>
                                                                <option value="590">St. Martin +590</option>
                                                                <option value="508">St. Pierre & Miquelon +508</option>
                                                                <option value="1784">St. Vincent & Grenadines +1784</option>
                                                                <option value="684">Samoa +684</option>
                                                                <option value="378">San Marino +378</option>
                                                                <option value="239">São Tomé & Príncipe +239</option>
                                                                <option value="966">Saudi Arabia +966</option>
                                                                <option value="221">Senegal +221</option>
                                                                <option value="381">Serbia +381</option>
                                                                <option value="381">Serbia +381</option>
                                                                <option value="248">Seychelles +248</option>
                                                                <option value="232">Sierra Leone +232</option>
                                                                <option value="65">Singapore +65</option>
                                                                <option value="1">Sint Maarten +1</option>
                                                                <option value="421">Slovakia +421</option>
                                                                <option value="386">Slovenia +386</option>
                                                                <option value="677">Solomon Islands +677</option>
                                                                <option value="252">Somalia +252</option>
                                                                <option value="27">South Africa +27</option>
                                                                <option value="500">South Georgia & South Sandwich Islands +500</option>
                                                                <option value="211">South Sudan +211</option>
                                                                <option value="34">Spain +34</option>
                                                                <option value="94">Sri Lanka +94</option>
                                                                <option value="249">Sudan +249</option>
                                                                <option value="597">Suriname +597</option>
                                                                <option value="47">Svalbard & Jan Mayen +47</option>
                                                                <option value="268">Eswatini +268</option>
                                                                <option value="46">Sweden +46</option>
                                                                <option value="41">Switzerland +41</option>
                                                                <option value="963">Syria +963</option>
                                                                <option value="886">Taiwan +886</option>
                                                                <option value="992">Tajikistan +992</option>
                                                                <option value="255">Tanzania +255</option>
                                                                <option value="66">Thailand +66</option>
                                                                <option value="670">Timor-Leste +670</option>
                                                                <option value="228">Togo +228</option>
                                                                <option value="690">Tokelau +690</option>
                                                                <option value="676">Tonga +676</option>
                                                                <option value="1868">Trinidad & Tobago +1868</option>
                                                                <option value="216">Tunisia +216</option>
                                                                <option value="90">Turkey +90</option>
                                                                <option value="7370">Turkmenistan +7370</option>
                                                                <option value="1649">Turks & Caicos Islands +1649</option>
                                                                <option value="688">Tuvalu +688</option>
                                                                <option value="256">Uganda +256</option>
                                                                <option value="380">Ukraine +380</option>
                                                                <option value="971" selected>United Arab Emirates +971</option>
                                                                <option value="44">United Kingdom +44</option>
                                                                <option value="1">United States +1</option>
                                                                <option value="1">U.S. Outlying Islands +1</option>
                                                                <option value="598">Uruguay +598</option>
                                                                <option value="998">Uzbekistan +998</option>
                                                                <option value="678">Vanuatu +678</option>
                                                                <option value="58">Venezuela +58</option>
                                                                <option value="84">Vietnam +84</option>
                                                                <option value="1284">British Virgin Islands +1284</option>
                                                                <option value="1340">U.S. Virgin Islands +1340</option>
                                                                <option value="681">Wallis & Futuna +681</option>
                                                                <option value="212">Western Sahara +212</option>
                                                                <option value="967">Yemen +967</option>
                                                                <option value="260">Zambia +260</option>
                                                                <option value="263">Zimbabwe +263</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-8 col-md-8 p-l-0" style={{ position: "relative" }}>
                                                            <span className="pre-fix" style={preFixStyle}>971</span>
                                                            <input type="number" id="phone" name="phone" style={{ paddingLeft: "55px" }} className="form-control field_12 p-l-55" placeholder=" Mobile Phone" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <select name="field[3]" id="field[3]" className="form-control country" required>
                                                        <option value="" selected>
                                                            Select Country*
                                                        </option>
                                                        {CountriesData.map((country: any, index: number) => {
                                                            return (
                                                                <option value={country.value} key={`country-${index}`}>
                                                                    {country.label}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Investor Type: <span className="danger">*</span>
                                                    </label>
                                                    <select name="field[253]" className="investortype form-control" itemID="field[253]" required>
                                                        <option selected value="">
                                                            Select Type
                                                        </option>
                                                        <option value="Venture Capitalist">
                                                            Venture Capitalist
                                                        </option>
                                                        <option value="Angel Network">
                                                            Angel Network
                                                        </option>
                                                        <option value="Angel Investor">
                                                            Angel Investor
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Company Logo: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        name="startuplogo"
                                                        className="form-control"
                                                        accept="image/png, image/gif, image/jpeg"
                                                        itemID="startuplogo"
                                                        id="startuplogo"
                                                        onChange={(e) => {
                                                            this.uploadImage("startuplogo");
                                                        }}
                                                    />
                                                    <input type="text" hidden className="startuplogo form-control" id="field[254]" name="field[254]" value="" placeholder="" required />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <input
                                                        placeholder="Website *"
                                                        type="text"
                                                        itemID="field[80]" name="field[80]"
                                                        className="website form-control"
                                                    />
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">

                                                    <input placeholder="Ticket Size (USD)*" type="text" id="field[101]" name="field[101]" className="ticketsize form-control" required />
                                                </div>



                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Interested Stage: <span className="danger">*</span>
                                                    </label>

                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                        </div>
                                                        <input data-autofill="false" type="hidden" id="field[264][]" name="field[264][]" value="~|" />
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Pre - Seed" type="checkbox" name="field[264][]" value="Pre - Seed" />
                                                            <span>
                                                                <label>
                                                                    Pre - Seed
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Seed" type="checkbox" name="field[264][]" value="Seed" />
                                                            <span>
                                                                <label htmlFor="field_264Seed">
                                                                    Seed
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Series A" type="checkbox" name="field[264][]" value="Series A" />
                                                            <span>
                                                                <label>
                                                                    Series A
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Series B" type="checkbox" name="field[264][]" value="Series B" />
                                                            <span>
                                                                <label>
                                                                    Series B
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Series C" type="checkbox" name="field[264][]" value="Series C" />
                                                            <span>
                                                                <label>
                                                                    Series C
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Series D" type="checkbox" name="field[264][]" value="Series D" />
                                                            <span>
                                                                <label>
                                                                    Series D
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input id="field_264Unicorn" type="checkbox" name="field[264][]" value="Unicorn" />
                                                            <span>
                                                                <label>
                                                                    Unicorn
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Focused Countries:
                                                    </label>
                                                    <Select

                                                        isMulti
                                                        name="colors"
                                                        options={CountriesData}
                                                        className="basic-multi-select"
                                                        onChange={this.handleSelectChange}
                                                        classNamePrefix="select"
                                                        placeholder="Select Focused Countries"

                                                    />
                                                    <input type="text" id="focusedCountriesInput" name="field[265][]" className="d-none" />
                                                </div>

                                            </div>

                                            <div className="row focused-countries">
                                                <div className="col-12">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Interested Sector: <span className="danger">*</span>
                                                    </label>
                                                    <input data-autofill="false" type="hidden" id="field[262][]" name="field[262][]" value="~|" />

                                                </div>
                                                <div className="col-12 col-lg-6 col-xl-6">
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Edtech" type="checkbox" name="field[262][]" value="Edtech" className="any" required />
                                                        <span>
                                                            <label>
                                                                Edtech
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Fintech" type="checkbox" name="field[262][]" value="Fintech" />
                                                        <span>
                                                            <label>
                                                                Fintech
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Gov Tech" type="checkbox" name="field[262][]" value="Gov Tech" />
                                                        <span>
                                                            <label>
                                                                Gov Tech
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Food Tech &amp; Agritech" type="checkbox" name="field[262][]" value="Food Tech &amp; Agritech" />
                                                        <span>
                                                            <label>
                                                                Food Tech &amp; Agritech
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Health Tech" type="checkbox" name="field[262][]" value="Health Tech" />
                                                        <span>
                                                            <label>
                                                                Health Tech
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262AR &amp; VR" type="checkbox" name="field[262][]" value="AR &amp; VR" />
                                                        <span>
                                                            <label>
                                                                AR &amp; VR
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Mobility" type="checkbox" name="field[262][]" value="Mobility" />
                                                        <span>
                                                            <label>
                                                                Mobility
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Cyber Security" type="checkbox" name="field[262][]" value="Cyber Security" />
                                                        <span>
                                                            <label>
                                                                Cyber Security
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Retail Tech &amp; E-commerce" type="checkbox" name="field[262][]" value="Retail Tech &amp; E-commerce" />
                                                        <span>
                                                            <label>
                                                                Retail Tech &amp; E-commerce
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Greentech" type="checkbox" name="field[262][]" value="Greentech" />
                                                        <span>
                                                            <label>
                                                                Greentech
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Metaverse" type="checkbox" name="field[262][]" value="Metaverse" />
                                                        <span>
                                                            <label>
                                                                Metaverse
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Deep Technology-Artificial Intelligence" type="checkbox" name="field[262][]" value="Deep Technology-Artificial Intelligence" />
                                                        <span>
                                                            <label>
                                                                Deep Technology-Artificial Intelligence
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Deep Technology-Internet of Things" type="checkbox" name="field[262][]" value="Deep Technology-Internet of Things" />
                                                        <span>
                                                            <label>
                                                                Deep Technology-Internet of Things
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Deep Technology-Decentralized Finance" type="checkbox" name="field[262][]" value="Deep Technology-Decentralized Finance" />
                                                        <span>
                                                            <label>
                                                                Deep Technology-Decentralized Finance
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Deep Technology-Blockchain" type="checkbox" name="field[262][]" value="Deep Technology-Blockchain" />
                                                        <span>
                                                            <label>
                                                                Deep Technology-Blockchain
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Deep Technology-Cryptocurrency" type="checkbox" name="field[262][]" value="Deep Technology-Cryptocurrency" />
                                                        <span>
                                                            <label>
                                                                Deep Technology-Cryptocurrency
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Deep Technology-Web 3" type="checkbox" name="field[262][]" value="Deep Technology-Web 3" />
                                                        <span>
                                                            <label>
                                                                Deep Technology-Web 3
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Sector Agnostic" type="checkbox" name="field[262][]" value="Sector Agnostic" />
                                                        <span>
                                                            <label>
                                                                Sector Agnostic
                                                            </label>
                                                        </span>
                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_262Others" type="checkbox" name="field[262][]" value="Others" />
                                                        <span>
                                                            <label>
                                                                Others
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="row">
                                                <div className="form-group col-12">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Short Description: <span className="danger">*</span>
                                                    </label>
                                                    <textarea id="field[261]" className="description form-control" name="field[261]" placeholder="" required></textarea>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-right">
                                                    <button
                                                        id="_form_408_submit"
                                                        type="submit"
                                                        className="startup-btn mt-3"
                                                    // onClick={(e) => {
                                                    //   var trigger = (window as any).form_submit(e);
                                                    //   if (trigger) {
                                                    //     this.register();
                                                    //   }
                                                    // }}
                                                    >
                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="_form-thank-you success"
                                            style={{ display: "none" }}>
                                            <div>
                                                <p className="mt-4" style={{ color: "black", fontWeight: "bold", fontSize: "24px" }}> Thank You for Your Registration!</p>
                                                <p className="mt-4" style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>


                                                    Your submission has been received successfully. The AIM Congress team will review your information and reach out to you within the next 24 to 48 hours with further details.

                                                    We appreciate your interest and look forward to connecting with you soon!


                                                </p>
                                                <p className="mt-4" style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>  Best regards, <br />
                                                    The AIM Congress Team</p>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </React.Fragment>
        );
    }
}
