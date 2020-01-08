var admin = require('firebase-admin');

class FirebaseService {
  constructor() {
    const serviceAccount = {
      type: "service_account",
      project_id: "uber-tutor",
      private_key_id: "d986d51897e0a77bb46c5b9837a80b9814dbc5a2",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCiMlS8uuBpFAYX\nDNYCR+9vvZBvp2nPRYFaF8qw+eiy+YoZpejeE/AYd0l8CZyevXkgImRwtOmILk1v\n2nv+ixyjOZA4Lqa2c4WhnKT+PKJv5x2xmJjaesfdV3OdLtzGkNYPmsT8j6wt1fQJ\nF2wYlP6TvxHFg6YBFh4Ghp4TE6UE+k97lpPmdtdAKl+vSEhs4ojgrBqSc9NMiU4A\nY3S5n0YmLXiqfoEKHCEN+ZbAo2/kcXSSuTdjYuv4flHKVF1HJ5KSUtrp2rcWV+aP\nvb4ZcPsWtk6ykcAeV4VVIWd2INyBBIboCnXPdZN/ryhJI3vdKARPYnOJBtXTZe/f\nWm3BtEL9AgMBAAECggEAFwEy/hK2VgkCRR4rs2afCfb1x7RTwFNwIYZa2AeWDt5w\nTSt4MBldVicDG+3kEiq3BY0DOG4calWA47K2H/f8n5UARMuvFxUi+LVWPH3+nwcF\nceU+FszP0K/A5OQa6ansxolR062QAu9D3c895G2rfuqce2ps7t4Dc7L/tB526xHY\nxfLXB0gZcu6maq+74Ikiv7rGtwyhd4BUDyt+j3Jsb7Jov7XQyWt4fJmSMKhcsbl9\nxlH7nl7hz5kpjMtwh1eh6qVdaVLg7tqr/yCSK6fy6Uxte7VMdHShsTqQxVkAKoNO\nYk4OrS/atECd0i3xto/fAqvakQS5YHB7IOCn/AoaqQKBgQDRLDl+YlToaZ5HMtc7\nJ5gma8nhTSCRokbxAgHvAVLidqagSJClGymaG+npnUbxy9DexfdAVOpg48HWBEKN\nzchGyjRRzGjfJ8UUNwfusiEeyaFfGGx0q8sf51mVv3MAZ2En808TuOCWFMm9819Q\nMpvEwClpZ/PX3GQciYLC90wCaQKBgQDGgeJlijcwL1txHEj95ThyleQMwXMbb0Il\n7PPzg3YmzZXGIGFBei4wtoCZmTGdiees3RpfiYKR8HHmBV9rN6CoRvcTIZvyT0tg\nrwWL+iEkcdbwvchlBORKAHvsWRuxVCSN+OKoNSbO94EoTCWuqFznRNakml7LZSr/\nVDk1DDbBdQKBgBoFj216nCeBpDAlUgNI7LOy6x19M9UKRBsNbeIm3wHPUvFTtbLk\niyth15q5dy7zdRuRsy2soq/FBcMzKnhrpkOwOgwHCvDgCLN4GSOHw3kKCmpDJpLp\nIE7qwAlSFONy+PI4YZkJgd8J3QMleLEIarpyUXSMexhakZW/QaYxj6IpAoGAPPgt\nsiRGmR0ih9Y5MQpTURZqqeRM13NPrNhfgT6ybm6cfvL5DCRbxYh4bTTZQVrW9oge\njpNssChaw1yJFyRJywWo445iGIV0UGjRWlHkFg6FBwIzZ5ueBoCpj0k7MTb310dH\nToSsu8rXN6pTtJZvmnTRPFNRpEUZdLzIqVtsAfUCgYB9JI5Aevhhh5ISRxmOw6EH\n0L09eGO6hkCpt4QQXjgzESDJ9A0tvFpjJgtQmviKCI5IfZxoZKhFWYt4u7DKLIUb\nsUB2S2772miKA/iiJw4SVMduIwrNRK96LVt+uVWxHgFLxXTNRJ29tkNKhD5mn+WK\n1lW4G7crEmbZWWWMzirAuA==\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-tx9vo@uber-tutor.iam.gserviceaccount.com",
      client_id: "117756874521792095924",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tx9vo%40uber-tutor.iam.gserviceaccount.com"
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://uber-tutor.firebaseio.com"
    });
  }

  async verifyIdToken(token) {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (err) {
      throw err;
    }
  }

  async createUser(params) {
    try {
      return await admin.auth().createUser({
        email: params.email,
        password: params.password
      });
    } catch (err) {
        console.log(err);

      throw err;
    }
  }
}

const firebaseService = new FirebaseService();

module.exports = firebaseService;