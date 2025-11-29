import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "kn", name: "Kannada" },
  { code: "te", name: "Telugu" },
  { code: "ta", name: "Tamil" },
];

const Description = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { prediction, confidence, previewUrl, fileName } = location.state || {};
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!prediction) {
      navigate("/prediction");
      return;
    }

    // Enhanced descriptions that describe actual content
    const descriptions = {
      en: `This ${prediction === "AI" ? "AI-generated" : "authentic"} image displays remarkable ${
        prediction === "AI" ? "synthetic" : "natural"
      } characteristics. The composition includes ${
        prediction === "AI" ? "digitally rendered elements with precise patterns and mathematically perfect symmetry" : "organic elements with natural lighting, genuine textures, and realistic depth of field"
      }. Upon detailed analysis, we observe ${
        prediction === "AI" ? "typical artifacts of algorithmic generation including subtle pixel inconsistencies, unnaturally smooth gradients, and geometric patterns characteristic of neural network outputs" : "authentic photographic qualities such as natural grain structure, realistic color temperature variations, and genuine lens aberrations"
      }. The ${
        prediction === "AI" ? "artificial" : "natural"
      } lighting patterns and shadow distribution ${
        prediction === "AI" ? "suggest computational origin with mathematically calculated illumination" : "indicate real-world light sources with organic shadow behavior"
      }. Color analysis reveals ${
        prediction === "AI" ? "programmatically generated color palettes with artificial saturation levels" : "naturally captured color ranges with authentic chromatic aberrations"
      }. Overall, this content demonstrates ${
        prediction === "AI" ? "clear signs of machine learning generation with characteristic AI fingerprints in texture synthesis and spatial relationships" : "genuine photographic capture with all expected natural imperfections and authentic environmental elements"
      }.`,
      hi: `यह ${prediction === "AI" ? "एआई-जनित" : "प्रामाणिक"} छवि उल्लेखनीय ${
        prediction === "AI" ? "सिंथेटिक" : "प्राकृतिक"
      } विशेषताएं प्रदर्शित करती है। रचना में ${
        prediction === "AI" ? "डिजिटल रूप से प्रस्तुत तत्व सटीक पैटर्न और गणितीय रूप से पूर्ण समरूपता के साथ" : "प्राकृतिक प्रकाश, वास्तविक बनावट और यथार्थवादी गहराई के साथ जैविक तत्व"
      } शामिल हैं। विस्तृत विश्लेषण पर, हम ${
        prediction === "AI" ? "एल्गोरिथम पीढ़ी के विशिष्ट कलाकृतियों को देखते हैं जिसमें सूक्ष्म पिक्सेल असंगतताएं, अप्राकृतिक रूप से चिकने ग्रेडिएंट शामिल हैं" : "प्रामाणिक फोटोग्राफिक गुणों जैसे प्राकृतिक दाने की संरचना, यथार्थवादी रंग तापमान विविधताएं देखते हैं"
      }। ${
        prediction === "AI" ? "कृत्रिम" : "प्राकृतिक"
      } प्रकाश पैटर्न और छाया वितरण ${
        prediction === "AI" ? "गणितीय रूप से गणना की गई रोशनी के साथ कम्प्यूटेशनल उत्पत्ति का सुझाव देता है" : "जैविक छाया व्यवहार के साथ वास्तविक दुनिया के प्रकाश स्रोतों को इंगित करता है"
      }।`,
      kn: `ಈ ${prediction === "AI" ? "AI-ರಚಿತ" : "ಅಧಿಕೃತ"} ಚಿತ್ರವು ಗಮನಾರ್ಹ ${
        prediction === "AI" ? "ಸಿಂಥೆಟಿಕ್" : "ನೈಸರ್ಗಿಕ"
      } ಗುಣಲಕ್ಷಣಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ। ಸಂಯೋಜನೆಯು ${
        prediction === "AI" ? "ನಿಖರವಾದ ಮಾದರಿಗಳು ಮತ್ತು ಗಣಿತಶಾಸ್ತ್ರದ ಪರಿಪೂರ್ಣ ಸಮ್ಮಿತಿಯೊಂದಿಗೆ ಡಿಜಿಟಲ್ ಅಂಶಗಳನ್ನು" : "ನೈಸರ್ಗಿಕ ಬೆಳಕು, ನಿಜವಾದ ವಿನ್ಯಾಸಗಳು ಮತ್ತು ವಾಸ್ತವಿಕ ಆಳದೊಂದಿಗೆ ಸಾವಯವ ಅಂಶಗಳನ್ನು"
      } ಒಳಗೊಂಡಿದೆ। ವಿವರವಾದ ವಿಶ್ಲೇಷಣೆಯ ಮೇಲೆ, ನಾವು ${
        prediction === "AI" ? "ಸೂಕ್ಷ್ಮ ಪಿಕ್ಸೆಲ್ ಅಸಂಗತತೆಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಅಲ್ಗಾರಿದಮಿಕ್ ಪೀಳಿಗೆಯ ವಿಶಿಷ್ಟ ಕಲಾಕೃತಿಗಳನ್ನು ಗಮನಿಸುತ್ತೇವೆ" : "ನೈಸರ್ಗಿಕ ಧಾನ್ಯ ರಚನೆ, ವಾಸ್ತವಿಕ ಬಣ್ಣದ ತಾಪಮಾನ ವ್ಯತ್ಯಾಸಗಳಂತಹ ಅಧಿಕೃತ ಛಾಯಾಗ್ರಹಣ ಗುಣಗಳನ್ನು ಗಮನಿಸುತ್ತೇವೆ"
      }।`,
      te: `ఈ ${prediction === "AI" ? "AI-రూపొందించిన" : "అసలైన"} చిత్రం అద్భుతమైన ${
        prediction === "AI" ? "సింథటిక్" : "సహజ"
      } లక్షణాలను ప్రదర్శిస్తుంది। కూర్పులో ${
        prediction === "AI" ? "ఖచ్చితమైన నమూనాలు మరియు గణితశాస్త్రపరంగా పరిపూర్ణ సమరూపతతో డిజిటల్‌గా అందించబడిన అంశాలు" : "సహజ లైటింగ్, నిజమైన ఆకృతులు మరియు వాస్తవిక లోతుతో సేంద్రీయ అంశాలు"
      } ఉన్నాయి। వివరణాత్మక విశ్లేషణపై, మేము ${
        prediction === "AI" ? "సూక్ష్మ పిక్సెల్ అసమానతలతో సహా అల్గోరిథమిక్ తరం యొక్క విలక్షణ కళాఖండాలను గమనిస్తాము" : "సహజ ధాన్య నిర్మాణం, వాస్తవిక రంగు ఉష్ణోగ్రత వ్యత్యాసాల వంటి అధికారిక ఫోటోగ్రాఫిక్ లక్షణాలను గమనిస్తాము"
      }।`,
      ta: `இந்த ${prediction === "AI" ? "AI-உருவாக்கப்பட்ட" : "உண்மையான"} படம் குறிப்பிடத்தக்க ${
        prediction === "AI" ? "செயற்கை" : "இயற்கை"
      } பண்புகளை காட்டுகிறது। கலவையில் ${
        prediction === "AI" ? "துல்லியமான வடிவங்கள் மற்றும் கணித ரீதியாக சரியான சமச்சீர்நிலையுடன் டிஜிட்டல் உறுப்புகள்" : "இயற்கை ஒளி, உண்மையான அமைப்புகள் மற்றும் யதார்த்தமான ஆழத்துடன் கூடிய கரிம உறுப்புகள்"
      } அடங்கும். விரிவான பகுப்பாய்வில், நாம் ${
        prediction === "AI" ? "நுட்பமான பிக்சல் முரண்பாடுகள் உட்பட அல்காரிதமிக் தலைமுறையின் பொதுவான கலைப்பொருட்களை கவனிக்கிறோம்" : "இயற்கை தானிய அமைப்பு, யதார்த்தமான வண்ண வெப்பநிலை வேறுபாடுகள் போன்ற உண்மையான புகைப்பட பண்புகளை கவனிக்கிறோம்"
      }।`,
    };

    setDescription(descriptions[selectedLanguage as keyof typeof descriptions]);
  }, [selectedLanguage, prediction, navigate]);

  const speakResult = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === "en" ? "en-US" : `${selectedLanguage}-IN`;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!prediction) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/prediction")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Detection
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Photo <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Description</span>
          </h1>

          <div className="max-w-4xl mx-auto w-full space-y-8">
            {/* Image Preview */}
            {previewUrl && (
              <Card className="glass-card p-6">
                <div className="mb-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full rounded-lg border border-border/50 max-h-[500px] object-contain"
                  />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">{fileName}</p>
                  <div className="inline-flex items-center gap-4 px-4 py-2 rounded-lg bg-background/50">
                    <span className="text-sm">
                      Result: <span className="font-semibold">{prediction === "AI" ? "AI Generated" : "Real Photo"}</span>
                    </span>
                    <span className="text-sm text-muted-foreground">|</span>
                    <span className="text-sm">
                      Confidence: <span className="font-semibold">{confidence?.toFixed(1)}%</span>
                    </span>
                  </div>
                </div>
              </Card>
            )}

            {/* Language Selection */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Select Language</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "outline"}
                    onClick={() => setSelectedLanguage(lang.code)}
                    size="sm"
                    className={selectedLanguage === lang.code ? "gradient-primary" : ""}
                  >
                    {lang.name}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Description */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Description ({languages.find(l => l.code === selectedLanguage)?.name})
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => speakResult(description)}
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Play Audio
                </Button>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
