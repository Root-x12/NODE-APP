pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Root-x12/NODE-APP.git'
      }
    }

    stage('Install & Test') {
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t local-node-app .'
      }
    }

    stage('Run with Compose') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }
  }
}
