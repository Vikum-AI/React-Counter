const scanner = require('sonarqube-scanner').default;

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: " sqp_9f960accc4ca8296ec7ef8e2bb5e374c05a97bc6",
        options: {
            'sonar.projectName': 'react-counter-jenkins',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'react-counter-jenkins',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.login': 'sqp_9f960accc4ca8296ec7ef8e2bb5e374c05a97bc6'
        }
    },
    error => {
        if (error) {
            console.error(error);
        }
        process.exit();
    },
)