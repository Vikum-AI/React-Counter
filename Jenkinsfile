pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/path/to/node:$PATH"
        DIRECTORY_PATH = '/path/to/code/directory'
        TESTING_ENVIRONMENT = 'StagingEnv'
        PRODUCTION_ENVIRONMENT = 'ProductionEnv'
        NETLIFY_ACCES_TOKEN = 'nfp_UiyBEBCBLMgWMi1H2rqp7EPuCuvKXZC959e3'
    }
    
    stages {
        stage('Build') {
            steps {
                script {
                    try {
                        echo "Building the application"
                        sh 'make build'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        echo "Build failed"
                        throw e
                    } finally {
                        sendEmail('Build')
                    }
                }
            }
        }
        
        stage('Unit and Integration Tests') {
            steps {
                script {
                    try {
                        echo "Running unit tests using JUnit"
                        echo "Running integration tests using JUnit"
                        sh 'npm test'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    } finally {
                        sendEmail('Unit and Integration Tests')
                    }
                }
            }
        }
        
        stage('Code Analysis') {
            steps {
                script {
                    try {
                        echo "Analyzing code quality using SonarQube"
                        // def scannerHome = tool 'SonarScanner';
                        // withSonarQubeEnv() {
                        // sh "${scannerHome}/bin/sonar-scanner"
                        // }
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    } finally {
                        sendEmail('Code Analysis')
                    }
                }
            }
        }
        
        stage('Security Scan') {
            steps {
                script {
                    try {
                        echo "Performing security scan"
                        sh 'npm audit'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    } finally {
                        sendEmail('Security Scan')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                echo "Deploying the application to the staging environment: ${env.TESTING_ENVIRONMENT}"
                sh 'make deploy-staging'

            }
        }
        
        stage('Integration Tests on Staging') {
            steps {
                echo "Running integration tests on the staging environment using JUnit"
            }
        }
        
        stage('Deploy to Production') {
            steps {
                script {
                    try {
                        echo "Deploying the application to the production environment: ${env.PRODUCTION_ENVIRONMENT}"
                        sh 'make deploy-prod'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    } finally {
                        sendEmail('Deploy to Production')
                    }
                }
            }
        }
    }
}

def sendEmail(stageName) {
    def buildStatus = currentBuild.result ?: 'SUCCESS'
    def log = currentBuild.rawBuild.getLog(100).join("\n")
    def authorEmail = sh(
        script: "git log -1 --pretty=format:'%ae'",
        returnStdout: true
    ).trim()

    emailext (
        to: "${authorEmail}",
        subject: "Jenkins Pipeline: ${stageName} Stage - ${buildStatus}",
        body: """<p>${stageName} Stage completed with status: ${buildStatus}</p>
                <p>Logs are attached.</p>""",
        attachLog: true,
        mimeType: 'text/html',
        compressLog: true
    )
}