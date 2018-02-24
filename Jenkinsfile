pipeline {
    agent { docker 'eps90/node-yarn' }
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    stages {
        stage('say hello') {
            steps {
                sh 'node --version'
                sh 'yarn --version'
            }
        }

        stage('install dependencies') {
            steps {
                sh "yarn install"
            }
        }

        stage('build') {
            steps {
                sh "yarn build:prod"
            }
        }

        stage('store') {
            steps {
                archive 'build/*'
            }
        }
    }
}