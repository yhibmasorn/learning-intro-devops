pipeline{
    agent any
    environment {
        DOCKER_IMAGE = 'nestjs-app'

    }

    stages{
        stage('Checkout'){
            steps{
                checkout scm

            }

        }

        stage('Build'){
            steps{
                script{
                    docker.build("$DOCKER_IMAGE:latest")
                }

            }

        }

        stage('Deploy'){
            steps{
                script{
                    sh 'docker stop my-nestjs-app || true'
                    sh 'docker rm my-nestjs-app || true'
                    sh 'docker run --name my-nestjs-app -p 3000:3000 $DOCKER_IMAGE:latest'
                }

            }
        }

    }

    post{
        always{
            echo 'Pipeline execution complete.'
        }

    }

}